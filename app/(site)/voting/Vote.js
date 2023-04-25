'use client';
import React, { useEffect, useState } from 'react';
import { useVoteContext } from '../../../context/VoteContext';

const Vote = () => {
	const { votes } = useVoteContext();
	const election = 'home';
	const [hasVoted, setHasVoted] = useState(null);

	useEffect(() => {
		const voted = votes.find((index) => index.name === election);
		if (voted) {
			setHasVoted(voted);
			console.log('voted');
		} else {
			setHasVoted(null);
			console.log('not voted');
		}
	}, [votes]);
	return (
		<>
			{votes?.map((vote, index) => {
				return (
					<p key={index} className={`${hasVoted ? 'text-blue-500' : ''}`}>
						{vote.name}
					</p>
				);
			})}
		</>
	);
};

export default Vote;
