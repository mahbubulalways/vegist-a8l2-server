const express = require("express");
const { getAllCategoriesController } = require("./category.controller");
const router = express.Router();

router.route("/").get(getAllCategoriesController);

module.exports = router;
