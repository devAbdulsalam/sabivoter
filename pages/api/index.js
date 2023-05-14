// import connectMDB from '@/database/connMDB';
// import { getGeneralInfo } from '@/database/controller/generalInfo';
// import { isAuthenticatedUser } from '@/database/middleware/auth';
// import nc from 'next-connect';
export default function handler(req, res) {
	res.status(200).json({ pageName: 'connect to MDB' });
}
