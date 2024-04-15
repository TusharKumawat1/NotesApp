import type { NextRequest,NextResponse} from 'next/server'
import bcrypt from "bcrypt"
import { dbConnection } from '@/utils/db'
import jwt from "jsonwebtoken"
dbConnection();
export const POST = async (
    req: NextRequest,
    res: NextResponse)=> {
        try {
            console.log(req.body)
        } catch (error) {
            console.log("Failed to signUp : ", error)
        }
    }