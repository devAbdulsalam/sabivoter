import connectMDB from '@/database/connMDB';
import { getGeneralInfo } from '@/database/controller/generalInfo';

export default async function handler(req, res) {
	connectMDB().catch(() =>
		res.status(405).json({ error: 'Error in the Connection' })
	);

	// type of request
	const { method } = req;

	switch (method) {
		case 'GET':
			getGeneralInfo(req, res);
			break;
		default:
			res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
			res.status(405).end(`Method ${method} Not Allowd`);
			break;
	}
}
