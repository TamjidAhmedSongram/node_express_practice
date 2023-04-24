import { Request,Response } from "express";
export const contactGet= (req:Request, res:Response)=>{
    res.status(200).json({message:"Got all the message"})
}
export const contactGetById= (req:Request, res:Response)=>{
    res.status(200).json({message:`Got the message for ${req.params.id} id`})
}

export const createNew= (req:Request, res:Response)=>{
    console.log(req.body)
    res.status(201).json({message:"Created the message"})
}
export const updateById = (req:Request,res:Response) =>{
    res.status(200).json({message:`Updated the message for ${req.params.id}`})
}
export const deleteById = (req:Request,res:Response) =>{
    res.status(200).json({message:`Deleted the message for ${req.params.id}`})
}