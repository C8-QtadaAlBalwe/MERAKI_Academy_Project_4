const express = require("express");
require("dotenv").config();
const app = express();
require("./Models/DataBase");
const PORT = process.env.PORT;
const cors = require("cors");

app.use(cors());
app.use(express.json());
// Imprort Routers .
const UserRouter = require("./Routes/User");
const RoleRouter = require("./Routes/Role");
const ProductRouter = require("./Routes/Products");
const CartRouter = require("./Routes/Cart");

// Routers MiddleWare .
app.use("/users", UserRouter);
app.use("/role", RoleRouter);
app.use("/product", ProductRouter);
app.use("/cart", CartRouter);

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});
