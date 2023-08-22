const express = require("express");
// functions place .
const {
  createNewProduct,
  getAllproduct,
  getProductById,
} = require("../Controllers/Products");

// MiddileWare
const authentication = require("../middileware/authentication");
const authorization = require("../middileware/authorization");
const ProductRouter = express.Router();

// req operaters place .
ProductRouter.post(
  "/",
  authentication,
  authorization(["MANAGE_USERS", "CREATE_PRODUCTS", "SHOOPING"]),
  createNewProduct
);
ProductRouter.get("/", authentication, getAllproduct);
ProductRouter.get("/search_2/:id", getProductById);
module.exports = ProductRouter;
