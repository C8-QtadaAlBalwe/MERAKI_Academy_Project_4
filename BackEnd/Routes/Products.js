const express = require("express");
// functions place .
const {createNewProduct,getAllproduct}=require("../Controllers/Products");
const ProductRouter = express.Router();

// req operaters place .
ProductRouter.post("/",createNewProduct);
ProductRouter.get("/",getAllproduct);
module.exports = ProductRouter;
