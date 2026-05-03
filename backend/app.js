const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const productRoutes = require("./routes/productRoute");

const app = express();

app.use(cors());
app.use(morgan("dev"));

//convert json string to js Object
app.use(express.json());
app.use("/api/v1/products", productRoutes);

module.exports = app;
