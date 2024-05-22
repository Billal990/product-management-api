import { Response } from 'express';

export function respond(
  res: Response,
  statusCode: number,
  success: boolean,
  message?: string,
  data?: unknown,
  error?: unknown,
) {
  res.status(statusCode).json({
    success,
    message,
    data,
    error,
    code: statusCode,
  });
}
