import { Request, Response, NextFunction } from "express";
export const errorHandler = (err:Error , req:Request , res:Response , next:NextFunction) =>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.json({message:err.message , stackTrace:err.stack , nameErr:err.name})
}