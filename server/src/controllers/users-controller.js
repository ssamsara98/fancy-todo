const createHttpError = require('http-errors');

const errorHelper = require('../helpers/error-helper');
const { signPayload } = require('../helpers/jwt');
const User = require('../models/user');

class UsersController {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;

      const user = new User({ name, email, password });

      await user.save();

      const payload = { name: user.name, email: user.email };
      const token = signPayload(payload);

      res.status(201).json({ token, user: { name: user.name } });
    } catch (err) {
      errorHelper(err);
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) throw createHttpError[400]('Unable to login');

      const user = await User.login(email, password);

      const payload = { name: user.name, email: user.email };
      const token = signPayload(payload);

      res.status(200).json({ token, user: { name: user.name } });
    } catch (err) {
      errorHelper(err);
      next(err);
    }
  }
}

module.exports = UsersController;
