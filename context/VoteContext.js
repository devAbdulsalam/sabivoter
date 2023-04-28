'use client';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect, createContext, useContext } from 'react';

export const VoteContext = createContext(null);

const VoteContextProvider = ({ children }) => {
	const { data: session } = useSession();
	const [votes, setVotes] = useState([]);
	useEffect(() => {
		setVotes(session?.user?.voted);
	}, [session]);
	return (
		<VoteContext.Provider value={{ votes, setVotes }}>
			{children}
		</VoteContext.Provider>
	);
};

export default VoteContextProvider;

export const useVoteContext = () => useContext(VoteContext);
