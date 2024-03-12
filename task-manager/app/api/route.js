import { getServerSession } from "next-auth";
import { authOptions } from "../lib/nextAuth";
import { NextResponse } from "next/server";
import dbConnect from "../lib/db";
import Task from "../models/Task";

const session = await getServerSession(authOptions);
//db connection handler

async function handler(req, res){
    if(session){
    await dbConnect;
    res.status(200).json({ message: 'DB connected '})
    }
}
export default async function GET(req){
    console.log(session)
    return NextResponse.json({id: 1})
}