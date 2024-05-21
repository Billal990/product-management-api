import { Response } from 'express';

export function respond(
  res: Response,
  statusCode: number,
  success: boolean,
  message?: string,
  data?: any,
  error?: any,
) {
  res.status(statusCode).json({
    success,
    message,
    data,
    error,
    code: statusCode,
  });
}
