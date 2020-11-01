const express = require('express');

const todosRouter = require('./routes/todos-router');
const usersRouter = require('./routes/users-router');

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api/users', usersRouter);

router.use('/api/todos', todosRouter);

module.exports = router;
