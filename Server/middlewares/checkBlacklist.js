const TokenBlacklist = require('../model/TokenBlacklist.modal');

const checkBlacklist = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  const blacklistedToken = await TokenBlacklist.findOne({ token });

  if (blacklistedToken) {
    return res.status(401).send({ status: 'failed', msg: 'Token is blacklisted' });
  }

  next();
};

module.exports = checkBlacklist;
