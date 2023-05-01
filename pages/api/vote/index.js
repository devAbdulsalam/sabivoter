// import connectMDB from '@/database/connMDB';
import nc from 'next-connect';
import { vote } from '@/database/controller/vote';
// import { isAuthenticatedUser } from '@/database/middleware/auth';

const handler = nc();
handler.use().post(vote);

export default handler;
