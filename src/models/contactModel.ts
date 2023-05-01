import {Schema, model} from "mongoose";

const contactSchema = new Schema({
    name: {
        type: String,
        required:[true,"This Name field is required"]
    },
    email:{
        type:String,
        required:[true,"This Email field is required"],
        unique: true
    },
    phoneNumber:{
        type:Number,
        required:[true,"This Phone Number is required"],
        unique: true
    }
},
    {
        timestamps:true
    }
)

const contactModel= model("ContactSchema",contactSchema)

export default contactModel     

 