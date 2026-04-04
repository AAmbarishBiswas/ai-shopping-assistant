import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

let wishlist: any[] = [];

export async function POST(req: Request) {
  const body = await req.json();

  wishlist.push(body);

  return Response.json({ message: "Saved successfully" });
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  // TEMP (in-memory)
  wishlist = wishlist.filter((item) => item.id != id);

  return Response.json({ message: "Deleted" });
}

export async function GET() {
  return Response.json(wishlist);
}