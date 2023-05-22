import { NextFunction, Request, Response } from "express";
import ApiResponse from "./ApiResponse";
import AppError from "./AppError";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.name === "CastError") err = handleCastErrorDB(err);
  if (err.code === 11000) err = handleDuplicateFieldsDB(err);
  if (err.name === "JsonWebTokenError") err = handleJWTError(err);
  if (err.name === "TokenExpiredError") err = handleJWTExpiredError(err);
  if (err.name === "ValidationError") err = handleValidationErrorDB(err);

  ApiResponse.error(err, res);
};

const handleCastErrorDB = (err: any) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err: any) => {
  const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
  const message = `Duplicate Field Value: ${value}. Please use another value`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err: any) => {
  const message = err;
  return new AppError(message, 422);
};

const handleJWTExpiredError = (err: any) =>
  new AppError("Login session has been expired, Login again", 401);

const handleJWTError = (err: any) => new AppError("Unauthorized", 401);

export default globalErrorHandler;
