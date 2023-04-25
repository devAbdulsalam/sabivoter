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
	const { candidateId } = req.query;
	try {
		const candidate = await Candidate.find({ _id: candidateId }).sort({
			createdAt: -1,
		});
		if (!candidate) return res.status(404).json({ error: 'Data not Found' });
		res.status(200).json(candidate);
	} catch (error) {
		res.status(404).json({ error: 'Error While Fetching Data...!' });
	}
}
