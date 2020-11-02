const createHttpError = require('http-errors');

const { verifyToken } = require('../helpers/jwt');
const User = require('../models/user');

const authentication = async (req, res, next) => {
  try {
    const auth = req.header('Authorization');

    if (!auth) throw createHttpError[400]('Token not found');

    const token = auth.replace('Bearer ', '');
    const payload = verifyToken(token);
    const user = await User.findOne({ email: payload.email });

    if (!user) throw createHttpError[401]('User not found');

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
