const authorization = (string) => {
  return (req, res, next) => {
    if (!req.token.role.permissions.includeS(string)) {
      return res.status(403).json({
        success: false,
        massege: "Unauthorization",
      });
    }
    next();
  };
};
module.exports = authorization;
