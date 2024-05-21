import { Request, Response } from 'express';
import { app } from '../../app';

export const undfinedRouteHandler = () => {
  app.all('*', (req: Request, res: Response) => {
    //Requested route and method from frontend
    const route = req.url;
    const method = req.method;

    res.json({
      message: 'Requested route not found!',
      route,
      method,
      code: 404,
      status: false,
    });
  });
};
