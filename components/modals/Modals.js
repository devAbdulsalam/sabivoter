'use client';
import React from 'react';
import { useModalContext } from '@/context/ModalContext';
import LogoutModal from './LogoutModal';
import UpdateModal from './UpdateModal';
import Modal from './Modal';

const Modals = () => {
	const { showModal, showUpdate, showLogout, setShowModal } = useModalContext();
	return (
		<>
			{showLogout && <LogoutModal />}
			{showUpdate && <UpdateModal />}
			<Modal show={showModal} onClose={setShowModal}>
				<div className="p-2 px-4">
					<h1 className="text-lg font-semibold  text-gray-800 dark:text-gray-200 px-2">
						Are You sure you want to Logout
					</h1>
				</div>
			</Modal>
		</>
	);
};

export default Modals;
