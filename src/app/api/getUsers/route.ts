import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  console.log("Users: ", users);

  return NextResponse.json(users);
}
