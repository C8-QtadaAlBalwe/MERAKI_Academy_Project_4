const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("DataBase Ready To Use");
  })
  .catch((err) => {
    console.log(err);
  });