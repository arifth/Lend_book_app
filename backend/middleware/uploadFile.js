var multer = require("multer");

var uploadFile = function (image) {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""));
    },
  });

  const fileFilter = function (req, file, cb) {
    // validate type of file
    if (file.fieldname === image) {
      if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = {
          message: "Only image files are allowed!",
        };
        return cb(new Error("Only image files are allowed!"), false);
      }
    }
    cb(null, true);
  };
  const sizeInMb = 10;
  const maxSize = sizeInMb * 1000 * 1000;

  const upload = multer({
    storage,
    fileFilter,
    limits: {
      fileSize: maxSize,
    },
  }).single(image);

  return function (req, res, next) {
    upload(req, res, (err) => {
      if (req.fileValidationError) {
        res.status(400).json(req.fileValidationError);
      }
      if (err) {
        res.status(400).json({ message: err });
      }
      return next();
    });
  };
};

module.exports = { uploadFile };
