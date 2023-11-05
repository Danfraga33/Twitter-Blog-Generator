import OpenAI from "openai";
import type { NextApiRequest, NextApiResponse } from "next";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { body } = req;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a tech social media marketing assistant.",
      },
      {
        role: "user",
        content: `Give me a twitter post about ${body} in first person. The post should be under 260 characters. 
		  
		  `,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  res.status(200).json(completion.choices[0].message.content);
}
