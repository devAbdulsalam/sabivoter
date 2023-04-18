import bcryptjs from "bcryptjs";
import User from "../../../app/components/database/model/user";
import connectMDB from "../../../app/components/database/connMDB";

export default async function handler(req, res) {
	connectMDB().catch(() =>
		res.status(405).json({ error: "Error in the Connection" })
	);

	// type of request
	const { method } = req;
	const { email, password } = req.body;

	if (method !== "POST") {
		return res.status(405).end(`Method ${method} Not Allowd`);
	}
	if (!email || password.length < 4) {
		return res.status(405).end(`Invalid Login credintials`);
	}
	try {
		if (!email && !password) {
			res.status(404).json({ error: "Invalid Login Credientials!!" });
			return;
		}

		let user = await User.findOne({ email });

		if (!user) {
			res.status(404).json({ error: "userName or Password is Incorrect!!" });
			return;
		}

		const match = bcryptjs.compareSync(password, user.password);
		if (!match) {
			res.status(404).json({ error: "userName or Password is Incorrect!!!" });
			return;
		}
		res.status(200).json({ user, message: "Log in successfully" });
	} catch (error) {
		res.status(404).json({ error: "Cannot get the User...!" });
	}
}
