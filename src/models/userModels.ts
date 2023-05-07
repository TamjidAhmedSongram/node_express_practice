import { Schema , model } from "mongoose";

const userSchema = new Schema({
    userName:{
        type:String,
        required:[true,"This username field is required"],
        unique:[true,"This name is aleready taken"]
    },
    password:{
        type:String,
        required:[true,"This password field cant be empty"],
    },
    email:{
        type:String,
        required:[true,"This email is required"],
        unique:[true,"This email is already taken"]
    }},{timestamps:true})

    const userModel = model("userSchema",userSchema)

    export default userModel