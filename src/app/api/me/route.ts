import prisma from "@/libs/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function GET(request: NextRequest) {
  try {
    let userId = await getDataFromToken(request);
    let user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
