import connectMDB from "../../../app/components/database/connMDB";
import {
	getCandidates,
	postCandidate,
} from "../../../app/components/database/controller/candidate";

export default async function handler(req, res) {
	// connectMDB
	connectMDB().catch(() =>
		res.status(405).json({ error: "Error in the Connection" })
	);

	// type of request
	const { method } = req;

	switch (method) {
		case "GET":
			getCandidates(req, res);
			break;
		case "POST":
			postCandidate(req, res);
			break;
		case "PUT":
			res.status(200).json({ method, name: "PUT Request" });
			break;
		case "DELETE":
			res.status(200).json({ method, name: "DELETE Request" });
			break;
		default:
			res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowd`);
			break;
	}
}
