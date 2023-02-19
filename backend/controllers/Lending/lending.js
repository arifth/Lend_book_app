const model = require("../../models");

exports.getLendings = async function (req, res) {
  const Lendings = await model.Lending.findAll();
  if (Lendings) {
    res.json(Lendings);
  } else {
    res.status(404).json({ message: "there is no Lending available" });
  }
};

exports.getLending = async function (req, res) {
  const id = req.params.id;

  console.log(id);
  const Lending = await model.Lending.findOne({
    where: {
      id: id,
    },
  });
  if (Lending) {
    res.json(Lending);
  } else {
    res.status(404).json({ message: "there is no category" });
  }
};

exports.addLending = async function (req, res) {
  try {
    const newContainer = await model.Lending.create(req.body);
    if (newContainer) {
      res.send(newContainer);
    }
  } catch (error) {
    console.log(error);
  }
};

// Api for approving Lending
exports.approveLending = async function (req, res) {
  try {
    const id = req.params.id;
    const data = { ...req.body, approval: true };

    const updated = await model.Lending.update(data, { where: { id: id } });
    if (updated) {
      return res.json({ message: `success update Lending` });
    } else {
      return res.json({ message: "Lending data doesnt exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: `cannot update data :( )` });
  }
};

// Api for returning Lending
exports.returnLending = async function (req, res) {
  try {
    const id = req.params.id;
    const data = { ...req.body, returned: true };

    const updated = await model.Lending.update(data, { where: { id: id } });
    if (updated) {
      return res.json({ message: `success update Lending` });
    } else {
      return res.json({ message: "Lending data doesnt exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: `cannot update data :( )` });
  }
};

exports.deleteLending = async function (req, res, next) {
  try {
    const id = req.params.id;
    const deleted = await model.Lending.destroy({ where: { id: id } });
    if (deleted) {
      return res.json({ message: `success deleted Lending` });
    } else {
      return res.json({ message: "Lending doesnt exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: `${error}` });
  }
};
