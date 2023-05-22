'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import hero from '@/public/assets/avatar.png';
import Votes from './Votes';
// import { useVoteContext } from '@/context/VoteContext';

const Profile = () => {
	const { data: session } = useSession();
	const user = session?.user;
	const votes = session?.user?.voted;

	return (
		<>
			<figure className="flex items-start sm:items-center">
				<div className="relative">
					<Image
						className="w-16 h-16 rounded-full mr-4"
						src={user?.image ? user?.image?.url : hero}
						alt={user?.name}
					/>
				</div>
				<figcaption>
					<h5 className="font-semibold text-lg">{user?.name}</h5>
					<p>
						<b>Email:</b> {user?.email} | <b>Joined On:</b>
						{user?.createdAt.substring(0, 10)}
					</p>
				</figcaption>
			</figure>

			<hr className="my-4" />

			<Votes votes={votes} />

			<hr className="my-4" />

			<Link href="/address/new">
				<button className="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100">
					<i className="mr-1 fa fa-plus"></i> Votes
				</button>
			</Link>

			<hr className="my-4" />
		</>
	);
};

export default Profile;
