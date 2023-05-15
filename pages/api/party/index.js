import { addParty } from '@/database/controller/party';
import { isAuthenticatedUser } from '@/database/middleware/auth';
import nc from 'next-connect';
import multer from 'multer';
import path from 'path';

export const config = {
	api: {
		bodyParser: false,
	},
};

const upload = multer({
	storage: multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, path.join(process.cwd(), 'public', 'uploads'));
		},
		filename: function (req, file, cb) {
			cb(null, new Date().getTime() + '-' + file.originalname);
		},
	}),
});

const uploadMiddleware = upload.array('image');
const handler = nc();

handler.use(isAuthenticatedUser, uploadMiddleware).post(addParty);

export default handler;
