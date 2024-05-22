import { NextFunction, Request, Response } from 'express';
import { respond } from './respond';
import {ZodError, z} from "zod"
export const globalErrorHandler = (
  error: Error | ZodError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error) {
    if(error instanceof z.ZodError){
      respond(res, 400, false, 'Data Validaition Error', null, error);
    }else{
      respond(res, 400, false, error?.message, null, error);
    }
  }else{
    next()
  }
};
