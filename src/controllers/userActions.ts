import { Request, Response } from "express";
import  asyncHandler  from "express-async-handler";

export const loginActions = asyncHandler(async (req:Request,res:Response) => {
    res.status(200).json({
        message:"Logged in"
    })
})

export const registerActions = asyncHandler(async (req:Request,res:Response) => {
    res.status(200).json({
        message:"Registered a user"
    })
})

export const currentActions = asyncHandler(async (req:Request,res:Response) => {
    res.status(200).json({
        message:"Current user"
    })
})