import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { Request } from "express";
const validateToken = asyncHandler(async (req: Request, res, next) => {
  let token;
  let authHeader: string =
    (req.headers.authorization as string) ||
    (req.headers.Authorization as string);
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string,
      (err: any, decode: any) => {
        if (err) {
          res.status(400);
          throw new Error("You are not Authorized");
        }
        console.log(decode);
        (req as any).user = (decode as any) ;
        // console.log("fffff"+(decode as any).user)
        next();
      }
    );
  }
  if (!token) {
    res.status(401);
    throw new Error("Token is Missing");
  }
});
export default validateToken;
