import connectMDB from '@/database/connMDB';
import Candidate from '@/database/model/candidate';

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
		const candidate = await Candidate.find({ election: electionId }).sort({
			createdAt: -1,
		});
		if (candidate && candidate.length > 0) {
			return res.status(200).json(candidate);
		}
		return res.status(404).json({ error: 'Candidates not Found' });
	} catch (error) {
		res.status(404).json({ error: 'Error While Fetching candidates ..!!' });
	}
}
