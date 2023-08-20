const express = require("express");
// functions place .
const {createNewProduct}=require("../Controllers/Products");
const ProductRouter = express.Router();

// req operaters place .
ProductRouter.post("/",createNewProduct);
module.exports = ProductRouter;
