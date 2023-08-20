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


// Function To check on User.

const login = (req, res) => {
    const password = req.body.password;
    const email = req.body.email;
    UserModel
        .findOne({ email })
        .populate("role", "-_id -__v")
        .then((results) => {
            if (!results) {
                return res.status(403).json({
                    success: false,
                    massege: `The email doesn't exist or The password you’ve entered is incorrect`,
                });
            }

            try {
                const validation = bcrypt.compare(password, results.password);
                if (!validation) {
                    res.status(403).json({
                        success: false,
                        massege: `The email doesn't exist or The password you’ve entered is incorrect`,
                    })
                }
                const payload = {
                    userId: results._id,
                    user: results.firstName,
                    role: results.role,
                    age: results.age,
                };

                const options = {
                    expiresIn: "60m",
                };

                const token = jwt.sign(payload, process.env.SECRET, options);
                res.status(200).json({
                    success: true,
                    message: "Valid login credentials",
                    token:token,
                })

            } catch (err) {
                throw new Error(err.massege)
            }
        }).catch((err) => {
            res.status(500).json({
                success: false,
                massege: "server Error",
                err: err.massege,
            })
        })
}
module.exports = {
    signUp,
    login
}