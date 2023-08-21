const express = require("express");
const { addProductToCart,deletePrductFromCart } = require("../Controllers/Cart")

// MiddileWare
const authentication= require("../middileware/authentication")

const CartRouter = express.Router();

// req operaters place .
CartRouter.post("/",authentication, addProductToCart);
CartRouter.delete("/:id",authentication,deletePrductFromCart);
module.exports = CartRouter;
