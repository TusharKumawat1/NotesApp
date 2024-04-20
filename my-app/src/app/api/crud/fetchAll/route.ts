import { middleware } from "@/middleware";
import Note from "@/models/NotesModel";
import User from "@/models/UserModel";
import { dbConnection } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    await dbConnection()
    await middleware(req)
    try {
        const userId = (req as { user?: string }).user
        const user = await User.findById({ _id: userId })
        if (!user) return NextResponse.json({ success: false, error: "User Not Exist" }, { status: 404 })
        const allNotes = await Note.find({ userId }).sort({
            updatedAt: -1
        })
        return NextResponse.json({ success: true, allNotes })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, error }, { status: 400 })
    }
}