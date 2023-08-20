const express = require("express");
const { addProductToCart } = require("../Controllers/Cart")

const CartRouter = express.Router();

// req operaters place .
CartRouter.post("/", addProductToCart);

module.exports = CartRouter;
