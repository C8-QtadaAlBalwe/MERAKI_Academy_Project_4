const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  nameProduct:{type:String},
  colors:{type:String},
  size:{type:String},
  quantity:{type:Number},
  price:{type:Number},
  img:{type:String},
});

module.exports = mongoose.model("Cart", CartSchema);
