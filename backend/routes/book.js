var express = require("express");
var router = express.Router();
var book = require("../controllers/books/books");
var uploadFile = require("../middleware/uploadFile");

/* GET users listing. */
router.get("/books", book.getBooks);
router.get("/book/:id", book.getBook);
router.post("/Book", uploadFile.uploadFile("cover"), book.addBook);
router.patch("/Book/:id", uploadFile.uploadFile("cover"), book.updateBook);
router.delete("/Book/:id", book.deleteBook);

module.exports = router;
