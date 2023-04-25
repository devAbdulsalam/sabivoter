import connectMDB from "@/database/connMDB";
export default function handler(req, res) {
	connectMDB();
	res.status(200).json({ pageName: "connect to MDB"});
}
