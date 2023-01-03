const multer = require("multer");
const location = "images";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `public/${location}`);
  },
  filename: (req, file, cb) => {
    const fileType = file.mimetype.split("/")[1];
    const originalName = file.originalname.split(".")[0];
    const fileName = `${originalName}-${Date.now()}.${fileType}`;

    cb(null, fileName);
  },
});

const upload = multer({ storage });

module.exports = {
  upload,
  storage,
  location,
};
