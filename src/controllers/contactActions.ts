import { Request,Response } from "express";
import asyncHandler from "express-async-handler";
import contactModel from "../models/contactModel";

export const contactGet= asyncHandler (async (req:Request, res:Response)=>{
    // console.log("---------")
    const contacts = await contactModel.find({user_id:(req as any).user.id})
    res.status(200).json(contacts)
})

export const contactGetById= asyncHandler (async (req:Request, res:Response)=>{
    const contact = await contactModel.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    if(contact.user_id?.toString() !== req.params.id){
        res.status(403)
        throw new Error("User dont have permission to create")
    }
    res.status(200).json(contact)
})

export const createNew= asyncHandler (async (req:Request, res:Response)=>{
    try {
        const {name , email , phoneNumber} = req.body
        if (!name || !email || !phoneNumber){
            res.status(400)
            throw new Error("All fields are required")
        }
        await contactModel.syncIndexes()
        const payload=new contactModel({name,email,phoneNumber,user_id:(req as any).user.id})
        
        const payloadResponse= await payload.save()
        res.status(201).json(payloadResponse)
    } catch (error:any) {
         // If there is an error, check if it is a duplicate key error
    if (error.code === 11000) {
        // Send back a conflict response with a custom message
        res.status(409).json({ message: 'Item name already exists' });
      } else {
        // Otherwise, send back a generic server error response
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
   
}
)
export const updateById = asyncHandler( async (req:Request,res:Response) =>{
    const contact = await contactModel.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    if(contact.user_id?.toString() !== req.params.id){
        res.status(403)
        throw new Error("User dont have permission to create")
    }

    try {
        const putResponse= await contactModel.findByIdAndUpdate(req.params.id,req.body, {new:true})
        res.status(200).json(putResponse)
    } catch (error) {
        res.status(404)
        throw new Error("Data Not found for id "+req.params.id)
    }
    
    // res.status(200).json({message:`Updated the message for ${req.params.id}`})
})

export const deleteById = asyncHandler (async (req:Request,res:Response) =>{
    const contact = await contactModel.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    if(contact.user_id?.toString() !== req.params.id){
        res.status(403)
        throw new Error("User dont have permission to create")
    }
    try {
        const deleted= await contactModel.findByIdAndDelete(req.params.id)
        if (deleted) {
            res.status(200).send(`Successfully deleted ${req.params.id}`)
        } else {
            res.status(404).send(`Not found ${req.params.id}`)
        }
        
    } catch (error) {
        res.status(404)
        throw new Error("Data Not found for id "+req.params.id)
    }
   
})