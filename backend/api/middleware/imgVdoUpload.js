const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("../config/cloudinaryConfig");

// (only for blog) ==> start

// Define Cloudinary storage for images (only for blog)
const imageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "LearnUp/blog-images",
    format: async (req, file) => "png", // Convert all images to PNG format
    public_id: (req, file) => {
      // Append a timestamp to the user's provided name to ensure uniqueness
      return req.body.fileName
        ? `${req.body.fileName}_${Date.now()}`
        : `image_${Date.now()}`; // Fallback to timestamp if no fileName is provided
    },
    resource_type: "auto",
  },
});

// Error-handling for image upload with a 4 MB limit
const uploadImage = (req, res, next) => {
  const upload = multer({
    storage: imageStorage,
    limits: { fileSize: 4 * 1000 * 1000 }, // 4 MB limit
    fileFilter: (req, file, cb) => {
      console.log("Checking file type:", req.file);
      console.log("Checking file type:", file.mimetype);
      if (
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png"
      ) {
        cb(null, true);
      } else {
        cb(new Error("Only .jpg, .png, or .jpeg formats are allowed!"), false);
      }
    },
  }).single("blogImage");

  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ error: "File size exceeds 4MB limit." });
      }
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(400).json({ error: err.message });
    }
    next(err); // Proceed to the next middleware if no error
  });
};
// (only for blog) ==> end

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // Determine the folder and format based on the file type
    if (file?.fieldname === "image") {
      return {
        folder: "LearnUp/course-images",
        format: "png", // Convert all images to PNG format
        public_id: req?.body.fileName
          ? `${req.body.fileName}_${Date.now()}`
          : `image_${Date.now()}`, // Fallback to timestamp if no fileName is provided
        resource_type: "auto",
      };
    } else if (file?.fieldname === "video") {
      return {
        folder: "LearnUp/course-video",
        format: "mp4", // Convert all videos to MP4 format
        public_id: req?.body.fileName
          ? `${req.body.fileName}_${Date.now()}`
          : `video_${Date.now()}`, // Fallback to timestamp if no fileName is provided
        resource_type: "auto",
      };
    }
  },
});

// Combined file upload and validation middleware
const uploadFiles = (req, res, next) => {

  const upload = multer({
    storage: storage,
    fileFilter: (req, files, cb) => {
      // File type validation

      if (files.fieldname === "image") {
        if (
          files.mimetype === "image/jpg" ||
          files.mimetype === "image/jpeg" ||
          files.mimetype === "image/png"
        ) {
          cb(null, true);
        } else {
          cb(
            new Error(
              "Only .jpg, .png, or .jpeg formats are allowed for images!"
            ),
            false
          );
        }
      } else if (files.fieldname === "video") {
        if (
          files.mimetype === "video/mp4" ||
          files.mimetype === "video/mpeg" ||
          files.mimetype === "video/webm"
        ) {
          cb(null, true);
        } else {
          cb(
            new Error(
              "Only .mp4, .mpeg, or .webm formats are allowed for videos!"
            ),
            false
          );
        }
      } else {
        cb(new Error("Invalid file type!"), false);
      }
    },
    limits: {
      fileSize: 100 * 1024 * 1024, // Max file size limit for both
    },
  }).fields([
    { name: "image", maxCount: 1 }, // Max 1 image
    { name: "video", maxCount: 1 }, // Max 1 video
  ]);

  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
          error:
            "File size exceeds the limit for video (100MB) or image (4MB).",
        });
      }
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(400).json({ error: err.message });
    }

    // File size validation for image (4MB) and video (100MB)
    const files = req?.files;
    // // Validate the image size (max 4MB)
    if (files?.image[0]?.size > 4 * 1024 * 1024) {
      return res.status(400).json({ error: "Image file size exceeds 4MB." });
    }

    // Validate the video size (max 100MB)
    if (files?.video[0]?.size > 100 * 1024 * 1024) {
      return res.status(400).json({ error: "Video file size exceeds 100MB." });
    }

    next(); // Proceed to the next middleware
  });
};

const deleteMediaFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.log(error);
    throw new Error("failed to delete assest from cloudinary");
  }
};

// Initialize multer with Cloudinary storage
const upload = multer({ storage: storage });

module.exports = { uploadImage, uploadFiles, deleteMediaFromCloudinary, upload };
