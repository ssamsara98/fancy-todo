import e, { ErrorRequestHandler, json, urlencoded } from 'express';
import createHttpError from 'http-errors';
import morgan from 'morgan';
import router from './router';

const app = e();

if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/', router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createHttpError(404));
});

// error handler
app.use(((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.stack = req.app.get('env') === 'development' ? err.stack : undefined;

  // render the error page
  res.status(err.status || 500);
  res.json(res.locals);
}) as ErrorRequestHandler);

export default app;
