import { getSession } from 'next-auth/react';
import bcryptjs from 'bcryptjs';
import User from '@/database/model/user';
import connectMDB from '@/database/connMDB';

export default async function handler(req, res) {
	// type of request
	if (req.method !== 'PUT') {
		return res.status(400).send({ message: `${req.method} not supported` });
	}

	connectMDB().catch(() =>
		res.status(405).json({ error: 'Error in the Connection' })
	);

	const { name, email, password } = req.body;

	const session = await getSession({ req });
	if (!session) {
		return res.status(401).send({ message: 'signin required' });
	}

	const { user } = session;
	try {
		if (!name && !email && !password) {
			res.status(404).json({ error: 'Invalid Credientials!!' });
			return;
		}

		if (!email.includes('@') || (password && password.trim().length < 5)) {
			res.status(422).json({
				message: 'Validation error',
			});
			return;
		}

		const toUpdateUser = await User.findById(user._id);
		toUpdateUser.name = name;
		toUpdateUser.email = email;

		if (password) {
			toUpdateUser.password = bcryptjs.hashSync(password);
		}

		const newUser = await toUpdateUser.save();

		// const match = bcryptjs.compareSync(password, user.password);
		// if (!match) {
		// 	res.status(404).json({ error: 'Password is Incorrect!!!' });
		// 	return;
		// }
		res
			.status(200)
			.json({ user: newUser, message: 'User updated successfully' });
	} catch (error) {
		res.status(404).json({ error: 'Cannot get the User...!' });
	}
}
