import type { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../components/Utils/connectMongo";
import User from "../../../components/models/UserSchema";
import { getAuth } from "@clerk/nextjs/server";

export default async function handler(req: NextRequest, res: NextResponse) {
  await connectDB();
  if (req.method === "GET") {
    const { userId } = getAuth(req);
    const userid = userId;
    try {
      const userDocument = await User.find({ userid: userid });
      return res.status(200).json(userDocument);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
