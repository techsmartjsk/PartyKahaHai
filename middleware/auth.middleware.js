const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const secretKey = process.env.JWT_SECRET_KEY;

const authMiddleware = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      throw new Error("Authorization header not found");
    }

    const token = authorizationHeader.replace("Bearer ", "");

    const decoded = jwt.verify(token, secretKey);

    const user = await User.findOne({ _id: decoded.id });

    if (!user) {
      throw new Error("User not found");
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Unauthorised" });
  }
};

module.exports = authMiddleware;
