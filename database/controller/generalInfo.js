import connectMDB from '@/database/connMDB';
import Election from '../model/election';
import Candidate from '../model/candidate';
import User from '../model/user';
import fs from 'fs';
// get : http://localhost:3000/api/generalInfo
export async function getGeneralInfo(req, res) {
	connectMDB().catch(() =>
		res.status(405).json({ error: 'Error in the Connection' })
	);

	try {
		const users = await User.find({}).sort({
			createdAt: -1,
		});
		const elections = await Election.find({}).sort({
			createdAt: -1,
		});
		const candidates = await Candidate.find({}).sort({
			createdAt: -1,
		});
		if (!elections) {
			return res.status(404).json({ error: 'Elections not Found' });
		}
		res.status(200).json({ users, elections, candidates, msg: 'success' });
	} catch (error) {
		res.status(404).json({ error: 'Error While Fetching Data' });
	}
}
