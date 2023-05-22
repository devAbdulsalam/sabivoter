import React from 'react';
// import {getServerSession} from 'next-auth/next'
import Profile from './../../components/user/Profile';
// import { redirect } from 'next/navigation';
// import { authOptions } from '../../..//pages/api/auth/[...nextauth]';
const ProfilePage = async () => {
	// const session = await getServerSession(authOptions)
	// if (!session) {
	// 	redirect('/signin?callbackUrl=/dashboard/me')
	// }
	return <Profile />;
};

export default ProfilePage;
