const express = require("express");
// functions place.
const { signUp,login } = require("../Controllers/User")
const UserRouter = express.Router();

// req operaters place .
UserRouter.post("/", signUp);
UserRouter.post("/login",login);

module.exports = UserRouter;
