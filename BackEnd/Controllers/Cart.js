const cartModel = require("../Models/CartSchema");

// Function To Add Product To shopping Cart .

const addProductToCart = (req, res) => {
  const { colors, size, quantity, price, nameProduct, img } = req.body;
  const productAdded = new cartModel({
    colors,
    size,
    quantity,
    price,
    nameProduct,
    img,
  });
  productAdded
    .save()
    .then((results) => {
      res.status(201).json({
        success: true,
        massege: `product added ${nameProduct}`,
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

const deletePrductFromCart = (req, res) => {
  const id = req.params.id;
  cartModel
    .findByIdAndDelete(id)
    .then((results) => {
      if (!results) {
        return res.status(404).json({
          success: false,
          massege: `The product with id => ${id} not found`,
        });
      }
      res.status(200).json({
        success: true,
        massege: "product deleted",
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

const getAllCartPordduct = (req, res) => {
  cartModel
    .find()
    .exec()
    .then((results) => {
      if (results.length) {
        res.status(200).json({
          success: true,
          massege: "all  the products in Cart",
          results: results,
        });
      } else {
        res.status(200).json({
          success: false,
          massege: "No There Any Products in cart",
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
module.exports = { addProductToCart, deletePrductFromCart, getAllCartPordduct };
