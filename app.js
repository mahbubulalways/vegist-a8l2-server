const express = require("express");
const cors = require("cors");
const app = express();
// middleware
app.use(express.json());
app.use(cors());

const productsRoute = require("./modules/products/product.routes");
const categoryRoute = require("./modules/category/category.routes");

app.use("/api/v1/products", productsRoute);
app.use("/api/v1/categories", categoryRoute);

app.get("/", async (req, res) => {
  res.send("server is running");
});
module.exports = app;
