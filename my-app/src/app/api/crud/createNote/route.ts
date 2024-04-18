import { middleware } from "@/middleware";
import Note from "@/models/NotesModel";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

export const POST=async(req:NextRequest)=>{
   try {
    const {content,color}=await req.json()
    if(!content && !color) return NextResponse.json({success:false,error:"Unprocessable entity"},{status:422})
    await middleware(req)
    const userId=(req as {user?:string}).user
    const user=await User.findById({_id:userId})
    if(!user) return NextResponse.json({success:false,error:"User Not Exist"},{status:404})
    const newNote=await Note.create({userId,content,color})
    await newNote.save();
    return NextResponse.json({success:true})
   } catch (error) {
    return NextResponse.json({success:false,error},{status:400})
   }
}