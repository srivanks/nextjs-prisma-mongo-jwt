import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (req: NextRequest) => {
  try {
    const token = req.cookies.get("token")?.value || "";
    //@ts-ignore
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

    return decodedToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
