'use client';
import React, { useEffect, useState } from 'react';
import { useVoteContext } from '@/context/VoteContext';
import { HiFingerPrint, HiThumbUp } from 'react-icons/hi';
import { useModalContext } from '@/context/ModalContext';

const VoteBtn = ({ election, candidate }) => {
	const { votes, setElection, setCandidate } = useVoteContext();
	const { setShowModal } = useModalContext();
	const [hasVoted, setHasVoted] = useState(null);
	useEffect(() => {
		const voted = votes?.find((index) => index.election === election);
		if (voted) {
			setHasVoted(voted);
		} else {
			setHasVoted(null);
		}
	}, [votes, election, candidate]);
	const handleVote = () => {
		setElection(election);
		setCandidate(candidate);
		setShowModal(true);
	};
	return (
		<>
			{hasVoted ? (
				<button className="btn md:btn-md bg-accent hover:bg-gray-500 md:btn-lg transition-all">
					<HiThumbUp className="w-6 h-6 mr-1" />
					Voted
				</button>
			) : (
				<button
					href={`/vote/${election}/${candidate}`}
					onClick={handleVote}
					className="btn md:btn-md bg-green-500 hover:bg-green-400 md:btn-lg transition-all"
				>
					<HiFingerPrint className="w-6 h-6 mr-1" />
					Vote
				</button>
			)}
		</>
	);
};

export default VoteBtn;
