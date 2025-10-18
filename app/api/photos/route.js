import { getAllPhotos } from "@/lib/image";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await getAllPhotos();
    return NextResponse.json(data);
}

