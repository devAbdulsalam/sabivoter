import connectMDB from "@/database/connMDB";
import {
	getElection,
	putElection,
	deleteElection,
} from "@/database/controller/election";

export default async function handler(req, res) {
	connectMDB().catch(() =>
		res.status(405).json({ error: "Error in the Connection" })
	);

	// type of request
	const { method } = req;

	switch (method) {
		case "GET":
			getElection(req, res);
			break;
		case "POST":
			res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
			break;
		case "PUT":
			putElection(req, res);
			break;
		case "DELETE":
			deleteElection(req, res);
			break;
		default:
			res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowd`);
			break;
	}
}
