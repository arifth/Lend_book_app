const model = require("../../models");

exports.getUsers = async function (req, res, next) {
  try {
    const users = await model.Users.findAll();
    // res.json(splitted);
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json("there is an error retrieving users");
  }
};

exports.getUser = async function (req, res, next) {
  const id = req.params.id;
  try {
    const user = await model.users.findOne({
      where: { id: id },
    });
    if (user) {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json("there is an error retrieving a user ");
  }
};
