import type { NextRequest, NextResponse } from "next/server";
import connectDB from "../../components/Utils/connectMongo";
import Tweet from "../../components/models/TwitterSchema";

//////////////////// CHANGE TO UPSERT!!! /////////////////////////////////
export default async function handler(req: NextRequest, res: NextResponse) {
  await connectDB();
  if (req.method === "POST") {
    try {
      const {
        id,
        firstName,
        lastName,
        primaryEmailAddress: { emailAddress },
      } = req.body;
      //Data going in
      const user = {
        id,
        firstName,
        lastName,
        email: emailAddress,
      };
      const newUser = new Tweet(user);

      const filter = { id };
      const update = { $set: user };
      const options = { upsert: true, new: true };

      const updatedUser = await Tweet.findOneAndUpdate(filter, update, options);
      // console.log("Saved Tweet:", updatedUser);

      res
        .status(200)
        .json({ message: "User data stored successfully", data: newUser });
    } catch (error) {
      console.error("Error storing user data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
