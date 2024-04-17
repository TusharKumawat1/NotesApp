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
            const decryptPass=bcrypt.compareSync(data.password,user.password)
            if (!decryptPass) {
                return NextResponse.json({success:false,error:"Wrong Credentials"},{status:401})
            }
            const payLoad={
                id:user._id,
                email:user.email
            }
            const token=jwt.sign(payLoad,"feeeenfeeeen")
            if (user) {
                return NextResponse.json({success:true,token},{status:200})
            }
            return NextResponse.json({success:false},{status:404})
        } catch (error) {
            console.log("Failed to signUp : ", error)
            return NextResponse.json({success:false,error},{status:500})
        }
    }