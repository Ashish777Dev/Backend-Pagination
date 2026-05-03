const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./../models/productModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);

mongoose.connect(DB).then(() => {
  console.log(`Database connected succesfully 🟢`);
});

const products = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, "utf-8"));

const importData = async () => {
  try {
    await Product.create(products);
    console.log("Data successfully imported");
  } catch (error) {
    console.log(`Failed to import data ${error}`);
  }

  process.exit();
};

const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log("Data successfully deleted");
  } catch (error) {
    console.log(`Failed to delete data ${error}`);
  }

  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
}
if (process.argv[2] === "--delete") {
  deleteData();
}
