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
module.exports = {
    createNewProduct
}