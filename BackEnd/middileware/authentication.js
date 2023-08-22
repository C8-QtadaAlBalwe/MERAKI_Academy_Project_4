const jwt = require("jsonwebtoken");

// To check if the user logged in .

const authentication = (req, res, next) => {
  try {
    // check the value of req.header.
    console.log(req.headers);

    if (!req.headers.authorization) {
      return res.status(403).json({
        success: false,
        massege: "Forbidden",
      });
    }
    const token = req.headers.authorization.split(" ").pop();
    jwt.verify(token, process.env.SECRET, (err, token) => {
      if (err) {
        res.status(403).json({
          success: false,
          massege: `The Token Is Invalid OR Expired`,
        });
      } else {
        req.token = token;
        next();
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      massege: "server error",
      err: err.massege,
    });
  }
};

module.exports = authentication;
