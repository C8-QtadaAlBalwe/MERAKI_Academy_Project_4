const express = require("express");
// functions place .
const{createNewRole,getAllRole}=require("../Controllers/Role")
const RoleRouter = express.Router();

// req Operaters place .
RoleRouter.post("/",createNewRole)
RoleRouter.get("/",getAllRole);
module.exports = RoleRouter;
