const UserModel = require("../Models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Function To create New User .

const signUp = (req, res) => {
  const { firstName, lastName, age, email, password, role } = req.body;
  const User = new UserModel({
    firstName,
    lastName,
    age,
    email,
    password,
    role:"64e3aee14e0f6d5565ac2f66"
  });

  User.save()
    .then((results) => {
      res.status(200).json({
        success: true,
        message: "Account Created Successfully",
        User: `the new ${results.firstName} `,
      });
    })
    .catch((err) => {
      res.status(409).json({
        success: false,
        message: "The email already exists",
        err: err.massege,
      });
    });
};

// Function To check on User.

const login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  UserModel.findOne({ email })
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
          });
        }
        const payload = {
          userId: results._id,
          age: results.age,
          role: results.role,
        };
        // check value payload
        console.log(payload);

        const options = {
          expiresIn: "60m",
        };

        const token = jwt.sign(payload, process.env.SECRET, options);
        res.status(200).json({
          success: true,
          message: "Valid login credentials",
          token: token,
        });
      } catch (err) {
        throw new Error(err.massege);
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massege: "server Error",
        err: err.massege,
      });
    });
};
module.exports = {
  signUp,
  login,
};
