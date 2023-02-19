const jwt = require("jsonwebtoken");
const model = require("../../models");
const bcrypt = require("bcryptjs");

exports.register = async function (req, res) {
  const { email, first_name, last_name, password } = req.body;
  try {
    const user = await model.Users.findOne({
      where: { email: email },
    });
    if (user) {
      res.status(404).json({ message: "email has been used" });
    } else {
      const userCreated = await model.Users.create({
        email: email,
        first_name: first_name,
        last_name: last_name,
        password: bcrypt.hashSync(password, 8),
        role: "USER",
        // ...req.body
      });
      if (userCreated) {
        return res.send({
          message: "success inserting user into database",
          user: userCreated.email,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("cannot register right now");
  }
};

// TODO[v]: CREATE LOGIN LOGIN TONIGHT
exports.login = async function (req, res) {
  const { email, password } = req.body;
  try {
    // query ke db
    const user = await model.Users.findOne({
      where: { email: email },
    });

    // logic if user is found
    if (user) {
      const compared = bcrypt.compareSync(password, user.password);
      if (compared) {
        const token = jwt.sign(
          { id: user.id, email: user.email, role: user.role },
          process.env.TOKEN_SECRET,
          {
            expiresIn: 86400,
          }
        );
        return res.send({
          message: "user is found",
          data: { user: user.email, uuid: user.uuid, token: token },
        });
      } else {
        // handle if there is no user with same password
        return res.json({ message: "password is wrong" });
      }
    } else {
      // handle if there is no user with same email
      res.json({ message: "email not found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "there is an error" });
  }
};

exports.checkAuth = function (req, res) {
  return res.json({ message: "authorization succeeded" });
};

exports.logout = function (req, res) {
  res.send("test logout");
};
