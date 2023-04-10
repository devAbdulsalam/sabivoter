import connectMDB from "../../../app/components/database/connMDB";
import Candidate from "../../../app/components/database/model/candidate";
// import { NextRequest, NextResponse } from "next/server";
// import {
// 	postCandidate,
// } from "../../../app/components/database/controller/candidate";

import { v2 as cloudinary } from "cloudinary";
import nc from "next-connect";
import multer from "multer";
export const config = {
	api: {
		bodyParser: false,
	},
};

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_API_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const handler = nc({
	onError: (err, req, res, next) => {
		console.error(err.stack);
		res.status(500).end("Something broke!");
	},
	onNoMatch: (req, res, next) => {
		res.status(404).end("Page is not found");
	},
})
	.use(multer().any())
	.post(async (req, res) => {
		connectMDB().catch(() =>
			res.status(405).json({ error: "Error in the Connection" })
		);
		console.log(req.body);
		console.log(req.body.image);
		const { name, party, profile, election } = req.body;
		try {
			if (!name || !party || !election) {
				return res.status(404).json({ error: "Form Data Not Provided...!" });
			}
			const candidate = await Candidate.create({
				name,
				party,
				profile,
				election,
				image,
			});
			if (!candidate) {
				return res.status(404).json({ error: "Error Creating candidate...!" });
			}
			return res
				.status(200)
				.json({ candidate, msg: "candidate created successfully" });
		} catch (error) {
			return res.status(404).json({ error });
		}
	});

// export async function POST(request, res) {
// 	console.log(await request.formData());
// 	return new NextResponse("Thank you");
// }
export default handler;
