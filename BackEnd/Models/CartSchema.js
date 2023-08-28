const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  nameProduct:{type:String},
  colors:{type:String},
  size:{type:String},
  quantity:{type:Number},
  price:{type:Number},
  img:{type:String},
  User: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Cart", CartSchema);
