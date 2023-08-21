const jwt = require("jsonwebtoken");

// To check if the user logged in .

const authentication = (req, res, next) => {
  try {
    if (!req.headers.authentication) {
      return res.status(403).json({
        success: false,
        massege: "Forbidden",
      });
    }
    const token = req.headers.authentication.spilt(" ").pop();
    jwt.verify(token, process.env.SECRET, (err, result) => {
      if (err) {
        res.status(403).json({
          success: false,
          massege: `The Token Is Invalid OR Expired`,
        });
      } else {
        req.token = result;
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
