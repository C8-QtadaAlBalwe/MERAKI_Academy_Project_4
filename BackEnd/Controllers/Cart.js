const cartModel = require("../Models/CartSchema");

// Function To Add Product To shopping Cart .

const addProductToCart = (req, res) => {
  const { user, role, product } = req.body;
  const productAdded = new cartModel({
    user,
    role,
    product,
  });
  productAdded
    .save()
    .then((results) => {
      res.status(201).json({
        success: true,
        massege: `product added ${product}`,
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
module.exports = { addProductToCart, deletePrductFromCart };
