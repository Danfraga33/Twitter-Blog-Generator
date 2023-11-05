import OpenAI from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';
const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const completion = await openai.chat.completions.create({
		messages: [
			{ role: 'system', content: 'You are a helpful assistant.' },
			{
				role: 'user',
				content:
					'Write a twitter post about about ${topic}, that targets the following comma-separated keywords. ',
			},
		],
		model: 'gpt-3.5-turbo',
	});
	res.status(200).json(completion.choices[0].message.content);
}
