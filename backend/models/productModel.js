const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: [true, "A product must have a name"],
    unique: true,
    trim: true,
  },
  emoji: {
    type: "String",
    required: [true, "A product must have a emoji"],
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
  category: {
    type: String,
    required: [true, "A product must have a category"],
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    selected: false,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
