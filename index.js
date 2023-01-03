const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

app.use(morgan("dev"));

const port = process.env.PORT;

// Database
require("./database");

// Static folder
app.use(express.static("public"));
app.use(express.json());

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
