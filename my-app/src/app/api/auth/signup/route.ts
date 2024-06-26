import { NextRequest,NextResponse} from 'next/server'
import bcrypt from "bcrypt"
import { dbConnection } from '@/utils/db'
import jwt from "jsonwebtoken"
import { validateData } from '@/validations/formValidation';
import User from '@/models/UserModel';

dbConnection();
export const POST = async ( req: NextRequest,)=> {
        try {
            const data=await req.json()
            const Error=validateData(data)
            if (!Error.isvalid) {
                return NextResponse.json({success:false,error:Error.errors},{status:400})
            }
            const user=await User.findOne({email:data.email})
            if (user) {
                return NextResponse.json({success:false,message:"User already exist"},{status:409})
            }
            const hashPass=bcrypt.hashSync(data.password,10)
            const newUser=await User.create({
                username:data.username,password:hashPass,email:data.email
            })
            await newUser.save()
            const payLoad={
                id:newUser._id,
                email:newUser.email
            }
            const token=jwt.sign(payLoad,process.env.JWT_SEC!)
            return NextResponse.json({success:true,token},{status:200})
        } catch (error) {
            console.log("Failed to signUp : ", error)
            return NextResponse.json({success:false,error},{status:500})
        }
    }