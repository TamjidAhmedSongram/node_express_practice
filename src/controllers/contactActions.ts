import { Request,Response } from "express";
import asyncHandler from "express-async-handler";
export const contactGet= asyncHandler (async (req:Request, res:Response)=>{
    res.status(200).json({message:"Got all the message"})
})

export const contactGetById= asyncHandler (async (req:Request, res:Response)=>{
    res.status(200).json({message:`Got the message for ${req.params.id} id`})
})

export const createNew= asyncHandler (async (req:Request, res:Response)=>{
    if (!req.body.name || !req.body.age || !req.body.phone_number){
        res.status(400)
        throw new Error("All fields are required")
    }
    res.status(201).json({message:"Created the message"})
}
)
export const updateById = asyncHandler( async (req:Request,res:Response) =>{
    res.status(200).json({message:`Updated the message for ${req.params.id}`})
})

export const deleteById = asyncHandler (async (req:Request,res:Response) =>{
    res.status(200).json({message:`Deleted the message for ${req.params.id}`})
})