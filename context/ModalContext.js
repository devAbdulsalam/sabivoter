'use client';
import React, { useState, createContext, useContext } from 'react';

export const ModalContext = createContext(null);

const ModalContextProvider = ({ children }) => {
	const [showUpdate, setShowUpdate] = useState(false);
	const [showLogout, setShowLogout] = useState(false);

	return (
		<ModalContext.Provider
			value={{ showUpdate, setShowUpdate, showLogout, setShowLogout }}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;

export const useModalContext = () => useContext(ModalContext);
