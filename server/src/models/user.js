const createHttpError = require('http-errors');
const mongoose = require('mongoose');
const { default: validator } = require('validator');

const { hashPassword, comparePassword } = require('../helpers/bcrypt');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name cannot be blank'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email cannot be blank'],
      trim: true,
      unique: [true, 'Email is already been taken'],
      validate: {
        validator(value) {
          return validator.isEmail(value);
        },
        msg: 'Please enter correct email address',
      },
    },
    password: {
      type: String,
      required: [true, 'Password cannot be blank'],
      minlength: [6, 'You password should be at least 6 characters'],
      maxlength: [32, 'The maximum of your password length is 32 charactes'],
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', function (next, docs) {
  const user = this;

  user.password = hashPassword(user.password);

  next();
});

userSchema.method('toJSON', function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
});

userSchema.static('login', async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw createHttpError[400]('Unable to login');
  }

  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) {
    throw createHttpError[400]('Unable to login');
  }

  return user;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
