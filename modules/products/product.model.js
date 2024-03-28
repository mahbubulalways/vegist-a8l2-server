const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    vegetable_name: {
      type: String,
      required: [true],
      trim: true,
    },
    image: {
      type: String,
      required: [true],
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
      required: [true],
    },
    rating: {
      type: Number,
      required: [true],
    },
    discount: {
      type: Number,
      required: [true],
    },
    review: {
      type: String,
      required: [true],
    },
    images: [{ type: String }],
    brand: {
      type: String,
    },
    limitedTime: {
      type: Date,
    },
    flashSale: {
      type: Boolean,
    },
    quantity_available: {
      type: Number,
    },
    categoryName: {
      type: String,
    },
    category: {
      type: String,
    },
    origin: {
      type: String,
    },
    organic: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Products", productSchema);

module.exports = Product;
