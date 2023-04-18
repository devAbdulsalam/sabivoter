import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { name } = req.body; // retrieve values from request body
		// const data = { name, election, party, profile }
		
		res.status(200).json({name, msg : "sucesssully register"});
	} catch (error) {
		res.status(500).json({ message: error });
	}
}
