const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const errorHelper = (err) => {
  if (err instanceof mongoose.Error) {
    console.log(err);
    if (err.name === 'ValidationError') err.status = 400;
  } else if (err instanceof jwt.JsonWebTokenError) err.status = 401;
  else if (err instanceof jwt.TokenExpiredError) err.status = 401;
  else if (err instanceof jwt.NotBeforeError) err.status = 403;
};

module.exports = errorHelper;
