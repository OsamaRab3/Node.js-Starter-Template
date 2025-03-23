
import { Request, Response, NextFunction } from "express";

const globalError = (error: any, req: Request, res: Response, next: NextFunction) => {

    error.statusCode = error.statusCode || 500;
    error.status = error.status || "error"

    res.status(error.statusCode).json({
        status: error.status,
        message: error.message
    })
}

const NotFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}
export default {globalError,NotFound};