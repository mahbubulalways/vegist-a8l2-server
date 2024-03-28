const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
  title: {
    type: String,
    required: [true],
  },
  name: {
    type: String,
    required: [true],
  },
  image: {
    type: String,
    required: [true],
  },
});
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
