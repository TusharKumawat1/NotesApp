import { middleware } from "@/middleware";
import Note from "@/models/NotesModel";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
    await middleware(req)
    try {
        const { content, color, _id } = await req.json()
        if (!_id) return NextResponse.json({ success: false, error: "Unprocessable entity" }, { status: 422 })
        const userId = (req as { user?: string }).user
        const user = await User.findById({ _id: userId })
        if (!user) return NextResponse.json({ success: false, error: "User Not Exist" }, { status: 404 })
        const newNote = await Note.findById(_id)
        if (!newNote) return NextResponse.json({ success: false, error: "Note Not Exist" }, { status: 404 })
        if (content) newNote.content = content
        if (color) newNote.color = color
        await newNote.save();
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 400 })
    }
}