import mongoose from "mongoose";
export const dbConnection=async()=>{
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI!)
    } catch (error) {
        console.log(`Faild to connect server : ${error}`)
    }
}