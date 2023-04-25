'use client';
import React from 'react';
import { useModalContext } from '@/context/ModalContext';
import LogoutModal from './LogoutModal';
import UpdateModal from './LogoutModal';

const Modals = () => {
	const { showUpdate, showLogout } = useModalContext();
	return (
		<div>
			{showLogout && <LogoutModal />}
			{showUpdate && <UpdateModal />}
		</div>
	);
};

export default Modals;
