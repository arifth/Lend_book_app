const model = require("../../models");

exports.getBooks = async function (req, res, next) {
  const books = await model.Book.findAll({
    include: [
      {
        model: model.Category,
        as: "categories",
      },
      {
        model: model.Users,
        as: "users",
      },
    ],
  });
  if (books) {
    res.send(books);
  } else {
    res.status(404).json({ message: "there is no book" });
  }
};

exports.getBook = async function (req, res) {
  const id = req.params.id;

  const books = await model.Book.findOne({
    where: {
      id: id,
    },
    include: [
      {
        model: model.Category,
        as: "categories",
      },
      {
        model: model.Users,
        as: "users",
      },
    ],
  });
  if (books) {
    res.send(books);
  } else {
    res.status(404).json({ message: "there is no book" });
  }
};

// FIXED[V]: Fix this method
exports.addBook = async function (req, res) {
  try {
    const data = req.body;
    const coverName = req.file.filename;
    console.log(coverName);
    const container = {
      ...data,
      cover: coverName ? process.env.PATH_FILE + coverName : null,
    };
    const newContainer = await model.Book.create(container);
    if (newContainer) {
      res.send(newContainer);
    }
  } catch (error) {
    console.log(error);
  }
};

// FIXED[V]: REQUIRE MULTER FOR EVERY FORM DATA
exports.updateBook = async function (req, res) {
  const coverName = req.file.filename;
  const container = {
    ...req.body,
    cover: coverName ? process.env.PATH_FILE + coverName : null,
  };
  const update = await model.Book.update(container, {
    where: { id: req.params.id },
  });
  if (update) {
    res.json({ message: "success updating book" });
  } else {
    res.status(404).json({ message: "Error Updating Book" });
  }
};

exports.deleteBook = async function (req, res) {
  try {
    const id = req.params.id;
    const deleted = await model.Book.destroy({ where: { id: id } });
    if (deleted) {
      return res.json({ message: `success deleted book` });
    } else {
      return res.json({ message: "book doesnt exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: `${error}` });
  }
};
