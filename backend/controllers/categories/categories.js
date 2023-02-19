const model = require("../../models");

exports.getCategories = async function (req, res) {
  const categoryies = await model.Category.findAll();
  if (categoryies) {
    res.send(categoryies);
  } else {
    res.status(404).json({ message: "there is no categories" });
  }
};

exports.getCategory = async function (req, res) {
  const id = req.params.id;

  console.log(id);
  const category = await model.Category.findOne({
    where: {
      id: id,
    },
  });
  if (category) {
    res.send(category);
  } else {
    res.status(404).json({ message: "there is no category" });
  }
};

exports.addCategory = async function (req, res) {
  try {
    const newContainer = await model.Category.create(req.body);
    if (newContainer) {
      res.send(newContainer);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateCategory = async function (req, res, next) {
  try {
    const id = req.params.id;
    const data = req.body;
    console.log(data);
    const updated = await model.Category.update(data, { where: { id: id } });
    if (updated) {
      return res.json({ message: `success update category` });
    } else {
      return res.json({ message: "category doesnt exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: `${error}` });
  }
};

exports.deleteCategory = async function (req, res, next) {
  try {
    const id = req.params.id;
    const deleted = await model.Category.destroy({ where: { id: id } });
    if (deleted) {
      return res.json({ message: `success deleted category` });
    } else {
      return res.json({ message: "category doesnt exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: `${error}` });
  }
};
