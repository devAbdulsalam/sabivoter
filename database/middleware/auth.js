import { getSession } from 'next-auth/react';
// import ErrorHandler from '../utils/errorHandler';

const isAuthenticatedUser = async (req, res, next) => {
	const session = await getSession({ req });

	if (!session) {
		return next(new Error('Login first to access this route', 401));
	}

	req.user = session.user;

	next();
};

const isUserAdmin = async (req, res, next) => {
	const session = await getSession({ req });

	if (!session && !session.user.role === 'admin') {
		return next(new Error('You are not Authorize', 401));
	}

	req.user = session.user;

	next();
};

export { isAuthenticatedUser, isUserAdmin };
