const express = require("express");
// functions place .
const{createNewRole}=require("../Controllers/Role")
const RoleRouter = express.Router();

// req Operaters place .
RoleRouter.post("/",createNewRole)
module.exports = RoleRouter;
