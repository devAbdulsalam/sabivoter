import connectMDB from "../../../app/components/database/connMDB";
import {
	getElections,
	postElection,
} from "../../../app/components/database/controller/election";

export default async function handler(req, res) {
	// connectMDB
	connectMDB().catch(() =>
		res.status(405).json({ error: "Error in the Connection" })
	);

	// type of request
	const { method } = req;

	switch (method) {
		case "GET":
			getElections(req, res);
			break;
		case "POST":
			postElection(req, res);
			break;
		case "PUT":
			res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
			break;
		case "DELETE":
			res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
			break;
		default:
			res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowd`);
			break;
	}
}
