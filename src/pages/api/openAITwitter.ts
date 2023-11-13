import OpenAI from "openai";
import type { NextApiRequest, NextApiResponse } from "next";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
import { getAuth } from "@clerk/nextjs/server";
import UserSchema from "../../components/models/UserSchema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  //Check if user has tokens
  const { userId } = getAuth(req);
  const { topic, keywords } = req.body;
  const userProfile = await UserSchema.find({
    userid: userId,
  });
  console.log(userProfile[0].tokens);

  if (!userProfile[0]?.tokens) {
    res.status(403).json({ message: "No more tokens" });
  }
  //////////////////////////
  /////////// Reduce tokens by one everytime a user generates a tweet
  await UserSchema.updateOne(
    {
      userid: userId,
    },
    {
      $inc: {
        tokens: -1,
      },
    },
  );

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a tech social media marketing assistant.",
      },
      {
        role: "user",
        content: `Give me a twitter post about ${topic} in first person. The post should include these  keywords: ${keywords}. The post should be under 260 characters. Do NOT surrond the response in quotation marks.
		  `,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  res.status(200).json(completion.choices[0].message.content);
}
