import React from 'react';
import Link from 'next/link';
import Vote from '../../../components/ui/VoteBtn';

const page = async () => {
	return (
		<div className="flex flex-col text-2xl font-semibold p-20 text-green-500">
			<Link href="./elections">Elections</Link>
			<Link href="./elections/countvote">Count Votes</Link>
			<div className="py-10 my-10 text-3xl">
				<Vote />
			</div>
		</div>
	);
};

export default page;
