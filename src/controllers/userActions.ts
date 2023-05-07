import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import userModel from "../models/userModels";
import { error } from "console";

export const loginActions = asyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).json({
      message: "Logged in",
    });
  }
);

export const registerActions = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password, userName } = req.body;
    // console.log(email, password, userName)
    const existingUser = await userModel.findOne({ $or: [email, userName] });

    if (existingUser) {
      res.status(400);
      throw new Error("User already Register same name or email");
    }


    res.status(200).json({
      message: "Registered a user",
    });
  }
);

export const currentActions = asyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).json({
      message: "Current user",
    });
  }
);
