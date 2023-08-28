const { json } = require("express");
const productModel = require("../Models/ProductsSchema");

// Function To Create New Product .

const createNewProduct = (req, res) => {
  const { nameProduct, ImgSrc, price, colors, size } = req.body;
  const User = req.token.userId;
  const NewProduct = new productModel({
    nameProduct,
    ImgSrc,
    price,
    colors,
    size,
    User,
  });
  NewProduct.save()
    .then((results) => {
      res.status(201).json({
        success: true,
        message: "Product created",
        product: `the new ${nameProduct} you created`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        err: err.message,
      });
    });
};

// function TO Get ALL products.
const getAllproduct = (req, res) => {
  const User = req.token.userId;
  productModel
    .find()
    .populate(["price", "size", "colors"])
    .exec()
    .then((results) => {
      if (results.length) {
        res.status(200).json({
          success: true,
          massege: "all  the products",
          results: results,
          User,
        });
      } else {
        res.status(200).json({
          success: false,
          massege: "No There Any Products",
        });
      }
    })
    .catch((err) => {
      res.status(500),
        json({
          success: false,
          massege: "Server Error",
          err: err.massege,
        });
    });
};

const getProductByName = (req, res) => {
  let nameProduct = req.params.nameProduct;
  productModel
    .find({nameProduct:req.params.nameProduct})
    .populate("User")
    .exec()
    .then((results) => {
      if (!results) {
        return res.status(404).json({
          success: false,
          massege: `The product with id => ${nameProduct} not found`,
        });
      }
      res.status(200).json({
        success: true,
        massege: `the product ${nameProduct}`,
        product: results,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massege: "server error",
        err: err.massege,
      });
    });
};
module.exports = {
  createNewProduct,
  getAllproduct,
  getProductByName,
};
