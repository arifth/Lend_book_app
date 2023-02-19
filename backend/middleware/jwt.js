const jwt = require("jsonwebtoken");

// exports.generateAccessToken = function (username) {
//   return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
// };

exports.verifyToken = function (req, res, next) {
  // logic buat potong Bearer word prefixing token di header
  if (req.headers.authorization) {
    const token = req.headers.authorization.split("").slice(7).join("");
    return jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
      if (err) {
        console.log(err);
        return res.status(403).send("error decoding token");
      } else {
        return next();
      }
    });
  } else {
    return res.status(401).json({ message: "unauthorized mamang" });
  }
};
