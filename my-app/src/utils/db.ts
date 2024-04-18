import mongoose from "mongoose";
export const dbConnection=async()=>{
    try {
        console.log(process.env.MONGO_URI!)
        await mongoose.connect(process.env.MONGO_URI!,{
            serverSelectionTimeoutMS: 10000, // 5 second timeout
          })
    } catch (error) {
        console.log(`Faild to connect server : ${error}`)
    }
}