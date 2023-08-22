const RoleModel = require("../Models/RoleSchema");

const createNewRole = (req, res) => {
  const { role, permissions } = req.body;
  const newRole = new RoleModel({
    role,
    permissions,
  });
  newRole
    .save()
    .then((results) => {
      res.status(201).json({
        success: true,
        massage: "Success role created",
        role: `created ${results.role} ${results.permissions}`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err.massage,
      });
    });
};
const getAllRole = (req, res) => {
  RoleModel.find()
    .exec()
    .then((results) => {
      if (results.length) {
        res.status(200).json({
          success: true,
          massege: "All Of Roles",
          roles: results,
        });
      } else {
        res.status(200).json({
          success: true,
          massege: "No roles there yet",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err.massege,
      });
    });
};
module.exports = { createNewRole, getAllRole };
