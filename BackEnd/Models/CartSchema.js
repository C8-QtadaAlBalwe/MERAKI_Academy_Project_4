const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  product: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

module.exports = mongoose.model("Cart", CartSchema);
