const express = require("express");
const {
  getAllProducts,
  postNewProduct,
  getSIngleProductController,
  getFlashSaleController,
  getFilteringProductController,
  getFirstTenProductsController,
} = require("./product.controller");
const router = express.Router();

router.route("/").post(postNewProduct).get(getAllProducts);
router.route("/first-ten").get(getFirstTenProductsController);
router.route("/filtering").get(getFilteringProductController);
router.route("/flash-sale").get(getFlashSaleController);
router.route("/:id").get(getSIngleProductController);
module.exports = router;
