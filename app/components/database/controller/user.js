/** User Controller */
import Users from "../model/user";
import bcryptjs from "bcryptjs";

// get : http://localhost:3000/api/users
export async function getUsers(req, res) {
	try {
		const users = await Users.find({}).sort({ createdAt: -1 });
		if (!users){
			 res.status(404).json({ error: "Data not Found" });
			return;
		} 
		res.status(200).json(users);
	} catch (error) {
		res.status(404).json({ error: "Error While Fetching Data" });
	}
}

// get : http://localhost:3000/api/users/1
export async function getUser(req, res) {
	try {
		const { userId } = req.query;

		if (userId) {
			const user = await Users.findById(userId);
			res.status(200).json(user);
		}
		res.status(404).json({ error: "User not Selected...!" });
	} catch (error) {
		res.status(404).json({ error: "Cannot get the User...!" });
	}
}

// post : http://localhost:3000/api/users
// export async function postUser(req, res) {
// 	try {
// 		const formData = req.body;
// 		console.log(req.body);
// 		if (!formData)
// 			return res.status(404).json({ error: "Form Data Not Provided...!" });
// 		const user = await Users.create({formData });
// 		if (!user) {
// 			return res.status(404).json({ error: "Error Creating User ..!" });
// 		}
// 		return res.status(200).json(user);
// 	} catch (error) {
// 		return res.status(404).json({ error });
// 	}
// }
// get : http://localhost:3000/api/user/login
// export async function logInUser(req, res) {
	
// }
// post : http://localhost:3000/api//users
export async function signInUser(req, res) {
	const { name, nin, email, state, country, password } = req.body;
	try {
		if (phone && email && password) {
			const ninexists = await Users.findOne({ nin });
			const emailexists = await Users.findOne({ email });

			if (ninexists) {
				res
					.status(404)
					.json({ error: "NIN Number already in use my another account !!" });
			}
			if (emailexists) {
				res
					.status(404)
					.json({ error: "Email already in use my another account !!" });
			}
			const salt = await bcryptjs.genSaltSync(10);
			const hash = await bcryptjs.hashSync(password, salt);
			const user = await Users.create({
				name,
				phone,
				nin,
				email,
				state,
				country,
				password: hash,
			});
			if (!user) {
				res.status(404).json({ error: "Error Signing in...!" });
			}
			res.status(200).json({ user, message: "Signin successfully" });
		}
		if (!name || !phone || !email || !password) {
			res.status(404).json({ error: "User not Selected...!" });
		}
	} catch (error) {
		res.status(404).json({ error: "Cannot Sign User in...!" });
	}
}

// put : http://localhost:3000/api/users/1
export async function putUser(req, res) {
	try {
		const { userId } = req.query;
		const formData = req.body;

		if (userId && formData) {
			const user = await Users.findByIdAndUpdate(userId, formData);
			res.status(200).json({ user, msg: "User updated successfully" });
		}
		res.status(404).json({ error: "User Not Selected...!" });
	} catch (error) {
		res.status(404).json({ error: "Error While Updating the Data...!" });
	}
}

// delete : http://localhost:3000/api/users/1
export async function deleteUser(req, res) {
	try {
		const { userId } = req.query;

		if (userId) {
			const user = await Users.findByIdAndDelete(userId);
			return res.status(200).json(user);
		}

		res.status(404).json({ error: "User Not Selected...!" });
	} catch (error) {
		res.status(404).json({ error: "Error While Deleting the User...!" });
	}
}
