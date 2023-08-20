const { json } = require("express");
const productModel = require("../Models/ProductsSchema");

// Function To Create New Product .

const createNewProduct = (req, res) => {
    const { nameProduct, ImgSrc, price, colors, size } = req.body;
    const NewProduct = new productModel({
        nameProduct,
        ImgSrc,
        price,
        colors,
        size,
        //User: inter the id of user.
    });
    NewProduct
        .save()
        .then((results) => {
            res.status(201).json({
                success: true,
                message: "Product created",
                product: `the new product ${results} you created`,
            })
        }).catch((err) => {
            res.status(500).json({
                success: false,
                message: "server error",
                err: err.message,
            })
        })

}

// function TO Get ALL products.
const getAllproduct = (req, res) => {
    const UserId = req.token.userId;
    productModel
        .find()
        .populate("firstName")
        .exec()
        .then((results) => {
            if (results.length) {
                res.status(200).json({
                    success: true,
                    massege: "all  the products",
                    userId: UserId,
                    products: results,
                });
            } else {
                res.status(200).json({
                    success: false,
                    massege: "No There Any Products"
                });
            }
        }).catch((err) => {
            res.status(500), json({
                success: false,
                massege: "Server Error",
                err: err.massege,
            });
        });
};
module.exports = {
    createNewProduct,
    getAllproduct,
}