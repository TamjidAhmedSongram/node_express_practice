import {connect} from "mongoose";

const connectDB= async ()=>{
    try {
        // console.log(process.env.CONNECTION_STREAM)
        const connection= await connect(process.env.CONNECTION_STREAM!)
        console.log("Database Connection " , connection.connection.name , connection.connection.host)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB