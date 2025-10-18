import { getPhotoById } from "@/lib/image";
import { NextResponse } from "next/server";

export async function GET(request, { params}){
    const { id } = params;
    const data = await getPhotoById(id);
    return NextResponse.json(data);
}