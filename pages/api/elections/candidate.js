import connectMDB from "../../../app/components/database/connMDB";
import {Candidate} from "../../../app/components/database/model/candidate";

export default async function handler(req, res) {
	connectMDB().catch(() =>
		res.status(405).json({ error: "Error in the Connection" })
	);

	// type of request
	const { method } = req;

	const { electionId } = req.query;
	try {
		const candidate = await Candidate.find({ election: electionId }).sort({
			createdAt: -1,
		});
		if (!candidate) return res.status(404).json({ error: "Data not Found" });
		res.status(200).json(candidate);
	} catch (error) {
		res.status(404).json({ error: "Error While Fetching Data" });
	}
}
