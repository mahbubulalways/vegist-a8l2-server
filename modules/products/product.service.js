const Product = require("./product.model");

exports.getAllProductService = async (query) => {
  const products = await Product.find(query);
  return products;
};
exports.getFirstTenProductsService = async () => {
  const products = await Product.find({}).limit(10);
  return products;
};

exports.postNewProductService = async (body) => {
  const product = new Product(body);
  const result = await product.save();
  return result;
};

// get single
exports.getSingleProductService = async (_id) => {
  const product = await Product.findOne({ _id });
  return product;
};

// flash sale
exports.getFlashSaleService = async () => {
  const response = await Product.find({ flashSale: true });
  return response;
};

// filtering

exports.getFilteringProductService = async (query) => {
  const { range, category, rating } = query;
  if (
    category === "undefined" &&
    range === "undefined" &&
    rating === "undefined"
  ) {
    console.log("dhukse");
    const products = await Product.find({});
    return products;
  }
  const pipeline = [];

  if (range !== "undefined") {
    console.log(range);
    console.log("range");
    const newPrice = range.split("-");
    const minPrice = newPrice[0];
    const maxPrice = newPrice[1];
    const priceFilter = {};
    if (minPrice) priceFilter.$gt = parseInt(minPrice);
    if (maxPrice) priceFilter.$lt = parseInt(maxPrice);
    pipeline.push({ $match: { price: priceFilter } });
    return await Product.aggregate(pipeline);
  }

  if (category !== "undefined") {
    console.log("category");
    pipeline.push({ $match: { category: category } });
    return await Product.aggregate(pipeline);
  }

  if (rating !== "undefined") {
    console.log("star");
    const star = parseInt(rating);
    pipeline.push({ $match: { rating: star } });
    return await Product.aggregate(pipeline);
  }
};
