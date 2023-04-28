import { Request, Response, NextFunction } from "express";
export const errorHandler = (err:Error , req:Request , res:Response , next:NextFunction) =>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case 400:
            res.json({title:"Validation Failed",message:err.message , stackTrace:err.stack , nameErr:err.name})
            break;
        case 404:
            res.json({title:"Not Found",message:err.message , stackTrace:err.stack , nameErr:err.name})
            break;
        case 403:
            res.json({title:"Forbidden",message:err.message , stackTrace:err.stack , nameErr:err.name})
            break; 
        case 500:
            res.json({title:"Internal Server Error",message:err.message , stackTrace:err.stack , nameErr:err.name})
            break;
        default:
            console.log("No Error")
            break;
    }
    
}
