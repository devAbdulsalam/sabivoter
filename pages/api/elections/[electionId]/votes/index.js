import connectMDB from '@/database/connMDB';
import Election from '@/database/model/election';

export default async function handler(req, res) {
	connectMDB().catch(() =>
		res.status(405).json({ error: 'Error in the Connection' })
	);

	// type of request
	if (req.method !== 'GET') {
		return res.status(405).end(`Method ${method} Not Allowd`);
	}
	const { electionId } = req.query;
	try {
		const votes = await Election.find({ _id: electionId}, {votes: 1}).sort({
			createdAt: -1,
		});
		if (!votes) {
			return res.status(404).json({ error: 'Votes not Found' });
		}
		res.status(200).json(votes);
	} catch (error) {
		res.status(404).json({ error: 'Error While Fetching votes ..!!' });
	}
}
