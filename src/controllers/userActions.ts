import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import userModel from "../models/userModels";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const loginActions = asyncHandler(
  async (req: Request, res: Response) => {
    const {email,password} = req.body
    if (!email || !password){
        res.status(400)
        throw new Error("Please FillUp All the fields")
    }
    const user= await userModel.findOne({email:email})
    if(user && await bcrypt.compare(password,user.password)){
 
        const token = jwt.sign({userName:user.userName, email:user.email, id:user.id},process.env.JWT_SECRET_KEY as string,{expiresIn:"1m"})
        res.status(200).json({token});
    }
    else{
        res.status(400).json({message:"user not found"})
    }
    
  }
);

export const registerActions = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password, userName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);
    try {
        const user = await userModel.create({email,userName,password:hashedPassword})
        if (user){
            res.status(201).json({_id:user.id , userName:user.userName , email:user.email})
        }
    } catch (error:any) {
        if (error.code === 11000) {
            // Send back a conflict response with a custom message
            res.status(409).json({ message: 'Item name already exists' });
          } else {
            // Otherwise, send back a generic server error response
            res.status(500).json({ message: 'Something went wrong' });
          }
        }
    }
  
);

export const currentActions = asyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).json((req as any).user);
  }
); 
