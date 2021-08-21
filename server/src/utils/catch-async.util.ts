// import { RequestHandler } from 'express';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import * as core from 'express-serve-static-core';

const catchAsync = <
  P = core.ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = core.Query,
  Locals extends Record<string, any> = Record<string, any>,
>(
  fn: (
    req: Request<P, ResBody, ReqBody, ReqQuery, Locals>,
    res: Response<ResBody, Locals>,
    next: NextFunction,
  ) => Promise<void>,
) => {
  return ((req, res, next) => {
    fn(req, res, next).catch(next);
  }) as RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>;
};

export default catchAsync;
