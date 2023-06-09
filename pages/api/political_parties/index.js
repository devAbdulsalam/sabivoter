import connectMDB from '@/database/connMDB';
import { getParties, postParty } from '@/database/controller/party';
export default async function handler(req, res) {
	// connectMDB
	connectMDB().catch(() =>
		res.status(405).json({ error: 'Error in the Connection' })
	);

	// type of request
	const { method } = req;

	switch (method) {
		case 'GET':
			getParties(req, res);
			break;
		case 'POST':
			postParty(req, res);
			break;
		case 'PUT':
			res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
			break;
		case 'DELETE':
			res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
			break;
		default:
			res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
			res.status(405).end(`Method ${method} Not Allowd`);
			break;
	}
}
