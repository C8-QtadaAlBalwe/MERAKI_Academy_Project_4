const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  NameProduct: { type: String },
  ImgSrc: { type: String },
  price: { type: Number },
  colors: [{ type: String }],
  size: [{ type: String }],
  User: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Product", ProductSchema);

