import connectMDB from "../../../app/components/database/connMDB";
import {
	getUsers,
	signInUser,
	putUser,
	deleteUser,
} from "../../../app/components/database/controller/user";

export default async function handler(req, res) {
	connectMDB().catch(() =>
		res.status(405).json({ error: "Error in the Connection" })
	);

	// type of request
	const { method } = req;

	switch (method) {
		case "GET":
			getUsers(req, res);
			break;
		case "POST":
			signInUser(req, res);
			break;
		case "PUT":
			putUser(req, res);
			break;
		case "DELETE":
			deleteUser(req, res);
			break;
		default:
			res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowd`);
			break;
	}
}
