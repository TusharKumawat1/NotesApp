import { NextRequest,NextResponse} from 'next/server'
import bcrypt from "bcrypt"
import { dbConnection } from '@/utils/db'
import jwt from "jsonwebtoken"
dbConnection();
export const POST = async ( req: NextRequest)=> {
        try {
            console.log(await req.json())
            return NextResponse.json({success:true})
        } catch (error) {
            console.log("Failed to signUp : ", error)
        }
    }