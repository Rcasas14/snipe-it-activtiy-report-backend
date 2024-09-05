import { NextFunction, Request, Response } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

export const notfoundMiddleware = (req: Request, res: Response) => {
  return res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND });
};

export const validateApiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const xApiKey = process.env.SNIPEIT_X_API;
  const reqApiKey = req.headers['x-api-key'];

  if (!reqApiKey) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ status: StatusCodes.UNAUTHORIZED, message: ReasonPhrases.UNAUTHORIZED });
  }

  if (reqApiKey !== xApiKey) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ status: StatusCodes.UNAUTHORIZED, message: ReasonPhrases.UNAUTHORIZED });
  }

  return next();
};
