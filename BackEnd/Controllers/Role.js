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
                role: `created ${results.role}`,
            })
        }).catch((err)=>{
            res.status(500).json({
                success:false,
                massage:"server error",
                err: err.massage,
            });
        });
};
module.exports={createNewRole};