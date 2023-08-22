const express = require("express");
const {
  addProductToCart,
  deletePrductFromCart,
} = require("../Controllers/Cart");

// MiddileWare
const authentication = require("../middileware/authentication");
const authorization = require("../middileware/authorization");
const CartRouter = express.Router();

// req operaters place .
CartRouter.post(
  "/",
  authentication,
  authorization("SHOPPING"),
  addProductToCart
);
CartRouter.delete(
  "/:id",
  authentication,
  authorization("SHOPPING"),
  deletePrductFromCart
);
module.exports = CartRouter;
