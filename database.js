const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.DB_URL;

const connectDB = new Promise((resolve, reject) => {
  console.log(url);
  mongoose.connection.on("connected", resolve);
  mongoose.connection.on("error", reject);
});

mongoose
  .connect(url, {})
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connectDB;
