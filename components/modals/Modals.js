'use client';
import React from 'react';
import { useModalContext } from '@/context/ModalContext';
import { useVoteContext } from '@/context/VoteContext';
import LogoutModal from './LogoutModal';
import UpdateModal from './UpdateModal';
import Modal from './Modal';
import Image from 'next/image';
import { HiFingerPrint } from 'react-icons/hi';
import avatar from '@/public/assets/avatar2.png';

const Modals = () => {
	const { showModal, showUpdate, showLogout, setShowModal } = useModalContext();
	const { candidate, vote, loading } = useVoteContext();
	return (
		<>
			{showLogout && <LogoutModal />}
			{showUpdate && <UpdateModal />}
			<Modal show={showModal} onClose={setShowModal}>
				<div className="p-2 px-4">
					<div className="my-1">
						<Image
							src={candidate?.image?.url || avatar}
							width={100}
							height={100}
							alt={candidate?.name || 'candidates'}
						/>
					</div>
					<h1 className="text-lg font-semibold  text-gray-800 dark:text-gray-200 px-2">
						Are You sure you want to Vote {candidate?.name}
					</h1>
					<button
						disabled={loading}
						onClick={() => vote()}
						className="btn md:btn-md bg-green-500 hover:bg-green-400 md:btn-lg transition-all"
					>
						<HiFingerPrint className="w-6 h-6 mr-1" />
						{loading ? 'Voting' : 'Vote'}
					</button>
				</div>
			</Modal>
		</>
	);
};

export default Modals;
