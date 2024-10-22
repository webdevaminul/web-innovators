const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("../config/cloudinaryConfig");

// Define Cloudinary storage for images
const imageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "LearnUp-images",
    format: async (req, file) => "png", // Convert all images to PNG format
    public_id: (req, file) => {
      // Append a timestamp to the user's provided name to ensure uniqueness
      return req.body.fileName
        ? `${req.body.fileName}_${Date.now()}`
        : `image_${Date.now()}`; // Fallback to timestamp if no fileName is provided
    },
    resource_type: "image",
  },
});

// Define Cloudinary storage for videos
const videoStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "LearnUp-videos",
    format: async (req, file) => "mp4", // Convert all videos to MP4 format
    public_id: (req, file) => {
      // Append a timestamp to the user's provided name to ensure uniqueness
      return req.body.fileName
        ? `${req.body.fileName}_${Date.now()}`
        : `video_${Date.now()}`; // Fallback to timestamp if no fileName is provided
    },
    resource_type: "video",
  },
});

// Error-handling for image upload with a 4 MB limit
const uploadImage = (req, res, next) => {
  const upload = multer({
    storage: imageStorage,
    limits: { fileSize: 4 * 1000 * 1000 }, // 4 MB limit
    fileFilter: (req, file, cb) => {
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
  }).single("image"); // 'image' match the key of the uploaded file from front end form

  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ error: "File size exceeds 4MB limit." });
      }
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(400).json({ error: err.message });
    }
    next(); // Proceed to the next middleware if no error
  });
};

// Error-handling for video upload with a 50 MB limit (adjustable)
const uploadVideo = (req, res, next) => {
  const upload = multer({
    storage: videoStorage,
    limits: { fileSize: 100 * 1000 * 1000 }, // 100 MB limit (or set according to your needs)
    fileFilter: (req, file, cb) => {
      console.log("75", file)
      console.log("Checking file type for video:", file.mimetype);
      if (
        file.mimetype === "video/mp4" ||
        file.mimetype === "video/mpeg" ||
        file.mimetype === "video/webm"
      ) {
        cb(null, true);
      } else {
        cb(new Error("Only .mp4, .mpeg, or .webm formats are allowed!"), false);
      }
    },
  }).single("video"); // 'video' should match the key of the uploaded file in your form

  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res
          .status(400)
          .json({ error: "Video file size exceeds 50MB limit." });
      }
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });
};

module.exports = { uploadImage, uploadVideo };
