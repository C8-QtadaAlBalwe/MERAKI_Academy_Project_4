const express = require("express");
// functions place.
const { signUp,login,getDataUser } = require("../Controllers/User")
const UserRouter = express.Router();

// req operaters place .
UserRouter.post("/", signUp);
UserRouter.post("/login",login);
UserRouter.get("/:userId",getDataUser);

module.exports = UserRouter;
