import type { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../components/Utils/connectMongo";
import User from "../../../components/models/UserSchema";

export default async function handler(req: NextRequest, res: NextResponse) {
  await connectDB();
  if (req.method === "POST") {
    try {
      const { userid, firstName, lastName, fullName, emailaddress } = req.body;
      if (!userid) {
        return res
          .status(400)
          .json({ error: "Validation Error", details: "userid is required." });
      }

      const user = {
        userid,
        firstName,
        lastName,
        fullName,
        emailaddress,
        tokens: 20,
      };

      console.log(user);
      const updatedUser = await User.findOneAndUpdate(
        { userid },
        {
          $set: user,
        },
        { upsert: true, new: true },
      );

      res
        .status(200)
        .json({ message: "User data stored successfully", data: updatedUser });
    } catch (error) {
      console.error("Error storing user data:", error);
      res
        .status(500)
        .json({ error: "Internal Server Error", details: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }

  // If the HTTP method is not POST or GET, return Method Not Allowed
  return res.status(405).json({ error: "Method Not Allowed" });
}
