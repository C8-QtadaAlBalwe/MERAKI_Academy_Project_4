const cartModel = require("../Models/CartSchema");

// Function To Add Product To shopping Cart .

const addProductToCart = (req, res) => {
    const productAdded = new cartModel({
        user,
        product,
    })
    productAdded
        .save()
        .then((results) => {
            res.status(201).json({
                success: true,
                massege: `product added ${product}`,
                product: results
            });
        }).catch((err) => {
            res.status(500).json({
                success: false,
                massege: "server error",
                err: err.massege,
            });
        });
};

module.exports = { addProductToCart }