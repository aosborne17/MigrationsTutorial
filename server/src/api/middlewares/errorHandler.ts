import { Errback, NextFunction, Request, Response } from "express";

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err.message);
  res.status(500).send(err.message);
}

export { errorHandler };
