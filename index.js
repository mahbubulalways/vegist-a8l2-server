const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");
const database = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;
mongoose.connect(database).then(() => {
  console.log("database connect success".yellow.bold);
});

app.listen(port, () => {
  console.log(`server is running port ${port}`.red.bold);
});
