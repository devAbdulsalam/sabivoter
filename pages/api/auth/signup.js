import bcryptjs from 'bcryptjs';
import User from '@/database/model/user';
import connectMDB from '@/database/connMDB';

async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).end(`Method ${method} Not Allowd`);
	}
	const { name, email, password } = req.body;
	if (
		!name ||
		!email ||
		!email.includes('@') ||
		!password ||
		password.trim().length < 5
	) {
		res.status(422).json({
			message: 'Validation error',
		});
		return;
	}

	await connectMDB().catch(() =>
		res.status(405).json({ error: 'Error in the Connection' })
	);

	const existingUser = await User.findOne({ email });
	if (existingUser) {
		res.status(422).json({ message: 'User exists already!' });
		// await db.disconnect();
		return;
	}

	const newUser = new User({
		name,
		email,
		password: bcryptjs.hashSync(password),
		isAdmin: false,
		...req.body,
	});

	const user = await newUser.save();
	// await db.disconnect();
	res.status(201).send({
		message: 'Created user!',
		name,
		email,
		password,
		_id: user._id,
		name: user.name,
		email: user.email,
		isAdmin: user.isAdmin,
	});
}

export default handler;
