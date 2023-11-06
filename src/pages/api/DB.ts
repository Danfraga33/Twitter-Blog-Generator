import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../components/Utils/connectMongo";
import Tweet from "../../components/models/TwitterSchema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectDB();
  if (req.method === "POST") {
    const { topic, result } = req.body;
    console.log("Before Save:", {
      topic: topic,
      result: result,
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
    const tweetData = await Tweet.find();
    res.status(200).json(tweetData);
  }
}
