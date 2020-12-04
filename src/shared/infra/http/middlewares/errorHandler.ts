import { NextFunction, Request, Response } from 'express';
import AppError from '@shared/errors/AppError';

export default (
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
};
