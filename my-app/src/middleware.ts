import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";
export const middleware =async (req: NextRequest) => {
    try {
        const token = req.headers.get("token")
        if (!token) return NextResponse.json({ success: false, error: "Not Authorized" }, { status: 409 })
        const decodedToken =jwtDecode(token);
        console.log(decodedToken)
        return NextResponse.next()
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error })
    }
}
export const config = {
    matcher: ["/api/crud/fetchAll"],
    // api: {},
}