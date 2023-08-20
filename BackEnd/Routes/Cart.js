const express = require("express");
const { addProductToCart,deletePrductFromCart } = require("../Controllers/Cart")

const CartRouter = express.Router();

// req operaters place .
CartRouter.post("/", addProductToCart);
CartRouter.delete("/:id",deletePrductFromCart);
module.exports = CartRouter;
