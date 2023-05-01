import connectMDB from '@/database/connMDB';
import { getVotes, vote, deleteVote} from '@/database/controller/vote';
// import { isAuthenticatedUser } from '@/database/middleware/auth';

// import nc from 'next-connect';

// const handler = nc()
// handler.use(isAuthenticatedUser).get(getVotes);
// export default handler;

export default function handler(req, res) {
	connectMDB().catch(() =>
		res.status(405).json({ error: 'Error in the Connection' })
	);
	// //type of request
	const { method } = req;

	switch (method) {
		case 'GET':
			getVotes(req, res);
			break;
		case 'POST':
			vote(req, res);
			break;
		case 'PUT':
			res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
			break;
		case 'DELETE':
			deleteVote(req, res);
			break;
		default:
			res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
			res.status(405).end(`Method ${method} Not Allowd`);
			break;
	}
}
