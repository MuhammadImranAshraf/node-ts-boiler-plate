import { NextFunction, Request, Response } from "express";

const tryCatchAsync =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res, next).catch(next);
  };

export default tryCatchAsync;
