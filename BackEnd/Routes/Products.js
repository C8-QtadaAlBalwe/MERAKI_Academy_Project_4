const express = require("express");
// functions place .
const {createNewProduct,getAllproduct,getProductById}=require("../Controllers/Products");

// MiddileWare
const authentication= require("../middileware/authentication")

const ProductRouter = express.Router();

// req operaters place .
ProductRouter.post("/",createNewProduct);
ProductRouter.get("/",authentication,getAllproduct);
ProductRouter.get("/search_2/:id",getProductById);
module.exports = ProductRouter;
