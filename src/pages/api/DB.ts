import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../components/Utils/connectMongo";
import Tweet from "../../components/models/TwitterSchema";
// import { getAuth } from "@clerk/nextjs/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // const { userId } = getAuth(req);
  // console.log(userId);
  await connectDB();
  if (req.method === "POST") {
    const { topic, result } = req.body;
    console.log("Before Save:", {
      // Clerk
      topic: topic, // Front End
      result: result, // Front End
    });
    try {
      const newTweet = new Tweet({
        topic: topic,
        result: result,
      });

      const savedTweet = await newTweet.save();
      console.log("Saved Tweet:", savedTweet);

      res.status(200).json(savedTweet);
    } catch (error) {
      console.error(error);
    }
  }

  if (req.method === "GET") {
    try {
      const documents = Tweet.find({ id: userId });
      console.log("Saved Tweet:", documents);

      res.status(200).json(documents);
    } catch (error) {
      console.error(error);
    }
  }
  if (req.method === "GET") {
    const tweetData = await Tweet.find();
    res.status(200).json(tweetData);
  }
}
