const jwt = require("jsonwebtoken");
const UserModel = require("../model/User");

var checkUserAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      //Get Token from header
      token = authorization.split(' ')[1];
      console.log(token);
      //Varify Token
      const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY);

      //Get User from token
      req.user = await UserModel.findById(userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401).send({ status: "failed", message: "Unauthorized User" });
    }
  }
  if (!token) {
    res.status(401).send({ status: "failed", message: "Unauthorized User, No Token" });
  }
};

module.exports = checkUserAuth;
