import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../components/Utils/connectMongo";
import Tweet from "../../../components/models/TwitterSchema";
import { getAuth } from "@clerk/nextjs/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectDB();
  if (req.method === "POST") {
    try {
      const { firstName, userid, lastName, topic, keywords, result } = req.body;

      const newTweet = new Tweet({
        userid,
        firstName,
        lastName,
        topic,
        keywords,
        result,
      });

      const savedTweet = await newTweet.save();

      res.status(200).json(savedTweet);
    } catch (error) {
      console.error(error);
    }
  }

  if (req.method === "GET") {
    const { userId } = getAuth(req);
    const userid = userId;
    // console.log(userId);
    try {
      const documents = await Tweet.find({ userid: userid });

      res.status(200).json(documents);
    } catch (error) {
      console.error(error);
    }
  }
  // if (req.method === "GET") {
  //   const tweetData = await Tweet.find();
  //   res.status(200).json(tweetData);
  // }
}
