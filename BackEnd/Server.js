const express = require("express");
const app = express();
require("./Models/DataBase");
app.use(express.json());
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});
