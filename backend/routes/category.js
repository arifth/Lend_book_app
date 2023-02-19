var express = require("express");
var router = express.Router();
var category = require("../controllers/categories/categories");

/* GET users listing. */
router.get("/categories", category.getCategories);
router.get("/category/:id", category.getCategory);
router.post("/category", category.addCategory);
router.patch("/category/:id", category.updateCategory);
router.delete("/category/:id", category.deleteCategory);

module.exports = router;
