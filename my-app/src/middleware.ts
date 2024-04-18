import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";
type jwtDecodeType={
    id:string;
    email:string
}
interface customeRequest extends NextRequest{
    user?:string
}
export const middleware =async (req: customeRequest) => {
    try {
        const token = req.headers.get("token")
        if (!token) return NextResponse.json({ success: false, error: "Not Authorized" }, { status: 409 })
        const decodedToken:jwtDecodeType =jwtDecode(token);
        req.user=decodedToken.id
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