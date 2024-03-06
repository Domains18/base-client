import {validateEmailAndPassword} from "@/app/helpers";
import bcrypt from "bcryptjs"
import prisma from "@/app/lib/prisma";
interface iBody{
    email : string;
    password : string;
}

export async function POST(request: Request){
    const body = await request.json()
    const {email, password}: iBody = body;
        if(!email || !password){
            return new Response("empty fields", {status: 400})
        }
        if(validateEmailAndPassword(email, password)){
            return Response.json({error: "invalid email or password"}, {status: 400})
        }
        const hash = bcrypt.hashSync(password, 10);
        prisma.user.create({
            data: {
                email,
                password: hash
            },
        });
    return Response.json({})
}