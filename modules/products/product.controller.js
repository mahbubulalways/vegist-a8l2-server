const {
  getAllProductService,
  postNewProductService,
  getSingleProductService,
  getFlashSaleService,
  getFilteringProductService,
  getFirstTenProductsService,
} = require("./product.service");

exports.getAllProducts = async (req, res) => {
  try {
    const query = req.query;
    const response = await getAllProductService(query);
    if (!response?.length) {
      return res.json({ success: false, message: "Product is not found" });
    } else {
      return res.json({ success: true, data: response });
    }
  } catch (error) {}
};

exports.getFirstTenProductsController = async (req, res) => {
  try {
    const response = await getFirstTenProductsService();
    if (!response?.length) {
      return res.json({ success: false, message: "Product is not found" });
    } else {
      return res.json({ success: true, data: response });
    }
  } catch (error) {}
};

exports.postNewProduct = async (req, res) => {
  try {
    const body = req.body;
    const result = await postNewProductService(body);
    return res.json({ data: result, success: true });
  } catch (error) {}
};

// get single

exports.getSIngleProductController = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await getSingleProductService(id);
    if (!response) {
      return res.json({ success: false, message: "Product is not found" });
    } else {
      return res.json({ success: true, data: response });
    }
  } catch (error) {}
};

// flash sale
exports.getFlashSaleController = async (req, res) => {
  try {
    const response = await getFlashSaleService();
    if (!response?.length) {
      return res.json({ success: false, message: "Flash sale is not found" });
    } else {
      return res.json({ success: true, data: response });
    }
  } catch (error) {}
};

exports.getFilteringProductController = async (req, res) => {
  try {
    const query = req.query;
    const response = await getFilteringProductService(query);
    if (!response?.length) {
      return res.json({ success: false, message: "Flash sale is not found" });
    } else {
      return res.json({ success: true, data: response });
    }
  } catch (error) {}
};
