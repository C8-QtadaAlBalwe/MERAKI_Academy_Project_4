const UserModel = require("../Models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Function To create New User .

const signUp = (req, res) => {
    const { firstName, lastName, age, email, password } = req.body;
    const User = new UserModel({
        firstName,
        lastName,
        age,
        email,
        password,
        //role: inter the id of role .
    });

    User
        .save()
        .then((results) => {
            res.status(200).json({
                success: true,
                message: "Account Created Successfully",
                User: `the new ${results}`,
            })
        }).catch((err) => {
            res.Status(409).json({
                success: false,
                message: "The email already exists"
            });
        })
    res.status(500).json({
        success: false,
        massege: "server error",
        err: err.massege,
    })
};

module.exports = {
    signUp
}