const Category = require("./category.model");

exports.getAllCategoriesService = async () => {
  const categories = await Category.find({});
  return categories;
};
