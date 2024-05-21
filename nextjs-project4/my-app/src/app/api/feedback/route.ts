import { NextResponse } from "next/server";

type Feedback = {
    name?:string,
    email?:string,
    message?:string,
}
export async function Post(request:Request){
    const data: Feedback = await request.json()
}