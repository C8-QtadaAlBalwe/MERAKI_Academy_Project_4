const express = require("express");
const {
  addProductToCart,
  deletePrductFromCart,
  getAllCartPordduct,
} = require("../Controllers/Cart");

// MiddileWare
const authentication = require("../middileware/authentication");
const authorization = require("../middileware/authorization");
const CartRouter = express.Router();

// req operaters place .
CartRouter.post(
  "/",
  authentication,
  //authorization("SHOOPING"),
  addProductToCart
);

CartRouter.get(
  "/",
  authentication,
  getAllCartPordduct
);

CartRouter.delete(
  "/:id",
  authentication,
  //authorization("SHOOPING"),
  deletePrductFromCart
);

module.exports = CartRouter;
