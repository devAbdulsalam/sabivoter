import connectMDB from "../../app/components/database/connMDB";
export default function handler(req, res) {
	connectMDB();
	res.status(200).json({ pageName: "connect to MDB"});
}
