const express = require("express");
// functions place .
const {
  createNewProduct,
  getAllproduct,
  getProductByName,
} = require("../Controllers/Products");

// MiddileWare
const authentication = require("../middileware/authentication");
const authorization = require("../middileware/authorization");
const ProductRouter = express.Router();

// req operaters place .
ProductRouter.post(
  "/",
  authentication,
  authorization("SHOOPING"),
  createNewProduct
);
ProductRouter.get("/", authentication, getAllproduct);
ProductRouter.get("/search_2/:nameProduct", getProductByName);
module.exports = ProductRouter;
