const multer = require("multer");
const path = require("path");

// multer using for file upload
const folder = "../..";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, folder); // Where to store the files
  },
  filename: (req, file, cb) => {
    // control file name like -> important file.png => important-file-time(forUni).png
    const fileExt = path.extname(file?.originalname);
    const fileName =
      (file.originalname
        ? file.originalname
            .replace(fileExt, "") // here your file name will be -> important file
            .toLowerCase()
            .split(" ") // split by spaces, split return array -> ['important', 'file']
            .join("-") // join with hyphen -> important-file
        : "unknown-file") + // if file name is nothing
      "-" +
      Date.now(); // Add timestamp nano-second -> important-file-123456
    cb(null, fileName + fileExt); // here filename and fileExt -> important-file-123456.png
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000, // 1 mb = 1000kb = 1000000 byte
  },
  fileFilter: (req, file, cb) => {
    console.log('34 u rou', req.body)
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg, .png, or .jpeg formats are allowed!"));
    }
  },
});

module.exports = upload ;