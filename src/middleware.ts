import { NextFunction, Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

export const middlewareNotFound = (req: Request, res: Response) =>{
    return res.status(StatusCodes.NOT_FOUND).json({message: ReasonPhrases.NOT_FOUND});
};

export const validateApiKeyMiddleware = (req: Request, res: Response)=>{
    const xApiKey = process.env.X_API_KEY;
    const reqApiKey = req.headers['x-api-key'];

    if (!reqApiKey) {
        return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ status: StatusCodes.UNAUTHORIZED, message: ReasonPhrases.UNAUTHORIZED });
    }
}