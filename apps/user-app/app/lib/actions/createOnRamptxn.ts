"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function createOnRampTransaction( provider : string, amount: number){
    const session = await getServerSession(authOptions)
    const token = Math.random().toString()
    const userId = session.user.id;
    
    if(!userId){
        return {
            message : "User not logged in"
        }
    }
   await prisma.onRampTransaction.create({
        data : {
            userId : Number(userId),
            provider ,
            amount : amount ,
            status : "Processing",
            startTime : new Date(),
            token : token
        }
    })

    return {
        message :  "On ramp transaction added"
    }
}
