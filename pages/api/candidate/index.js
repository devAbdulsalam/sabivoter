import connectMDB from '@/database/connMDB';
import { addCandidate } from '@/database/controller/candidate';
import upload from '@/utils/multer';
import nc from 'next-connect';

export const config = {
	api: {
		bodyParser: false,
	},
};

const uploadMiddleware = upload.array('image');

const handler = nc({
	onError: (err, req, res, next) => {
		console.error(err.stack);
		res.status(500).end('Something broke!');
	},
	onNoMatch: (req, res, next) => {
		res.status(404).end('Page is not found');
	},
});

connectMDB().catch(() =>
	res.status(405).json({ error: 'Error in the Connection' })
);

handler.use(uploadMiddleware).post(addCandidate);

export default handler;
