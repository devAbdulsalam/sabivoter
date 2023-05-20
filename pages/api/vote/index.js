// import connectMDB from '@/database/connMDB';
import nc from 'next-connect';
import { getALLVotes } from '@/database/controller/vote';
// import { isAuthenticatedUser } from '@/database/middleware/auth';

const handler = nc();
handler.get(getALLVotes);

export default handler;
