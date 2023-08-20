const express = require("express");
// functions place.
const { signUp } = require("../Controllers/User")
const UserRouter = express.Router();

// req operaters place .
UserRouter.post("/", signUp);


module.exports = UserRouter;
