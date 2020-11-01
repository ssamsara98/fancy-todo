const express = require('express');

const UsersController = require('../controllers/users-controller');

const usersRouter = express.Router();

usersRouter.post('/sign-up', UsersController.register);
usersRouter.post('/sign-in', UsersController.login);

module.exports = usersRouter;
