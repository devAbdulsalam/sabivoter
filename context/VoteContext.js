'use client';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { cookies } from 'next/headers';

export const VoteContext = createContext(null);

const VoteContextProvider = ({ children }) => {
	const { data: session } = useSession();
	const [votes, setVotes] = useState([]);
	const [election, setElection] = useState('');
	const [candidate, setCandidate] = useState({});
	const [loading, setLoading] = useState(false);

	// const nextCookies = cookies();

	// const nextAuthSessionToken = nextCookies.get('next-auth.session-token');

	const vote = () => {
		if (!candidate || !election) {
			return toast.error('invalid vote');
		}
		const data = {
			voter: session?.user?._id,
			election,
			candidate: candidate._id,
		};
		setLoading(true);
		console.log(session?.user?._id);
		axios
			.post(`/api/votes`, data)
			.then((res) => {
				setLoading(false);
				console.log(res);
				toast.success('Profile updated successfully');
			})
			.catch((error) => {
				setLoading(false);
				console.log(error?.response?.data?.error);
				toast.error(error?.response?.data?.error || error.message);
			});
	};

	useEffect(() => {
		setVotes(session?.user?.voted);
	}, [session]);
	return (
		<VoteContext.Provider
			value={{
				vote,
				votes,
				setVotes,
				election,
				setElection,
				candidate,
				setCandidate,
				loading,
				setLoading,
			}}
		>
			{children}
		</VoteContext.Provider>
	);
};

export default VoteContextProvider;

export const useVoteContext = () => useContext(VoteContext);
