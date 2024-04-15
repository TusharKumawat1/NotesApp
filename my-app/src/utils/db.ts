import mongoose from "mongoose";
export const dbConnection=async()=>{
    try {
        console.log(process.env.MONGO_URI!)
        await mongoose.connect(process.env.MONGO_URI!)
    } catch (error) {
        console.log(`Faild to connect server : ${error}`)
    }
}