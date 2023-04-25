'use client';
import { useSession } from 'next-auth/react';
import React, { useState, useEffect, createContext, useContext } from 'react';

export const ProductContext = createContext(null);

const VoteContextProvider = ({ children }) => {
	const { data: session } = useSession();
	const [votes, setVotes] = useState([]);
	useEffect(() => {
		setVotes(session?.user?.user.voted);
	}, [session]);
	return (
		<ProductContext.Provider value={{ votes, setVotes }}>
			{children}
		</ProductContext.Provider>
	);
};

export default VoteContextProvider;

export const useVoteContext = () => useContext(ProductContext);
