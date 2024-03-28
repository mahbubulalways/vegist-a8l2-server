const { getAllCategoriesService } = require("./category.service");

exports.getAllCategoriesController = async (req, res) => {
  try {
    const query = req.query;
    const response = await getAllCategoriesService(query);
    if (!response?.length) {
      return res.json({ success: false, message: "Category is not found" });
    } else {
      return res.json({ success: true, data: response });
    }
  } catch (error) {}
};
