'use client';
import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
// import { XMarkIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';
import { useModalContext } from '@/context/ModalContext';

const LogoutModal = () => {
	const { showLogout, setShowLogout } = useModalContext();
	const [loading, setLoading] = useState(false);
	// const [showPin, setShowPin] = useState(false);
	// const [showTopup, setShowTopup] = useState(false);

	const handlelogout = async () => {
		try {
			setLoading(true);
			const response = await fetch('/api/sendMoney', requestOptions);
			const data = await response.json();
			if (data?.status === 'true') {
				toast.success(data.message);
				setShowLogout(!showLogout);
				signOut({ callbackUrl: '/signin' });
			} else {
				toast.error(data.message);
				setLoading(false);
			}
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	return (
		<div
			className={`w-screen h-screen bg-black/80 absolute flex justify-center items-center top-0 left-0 right-0 buttom-0 overflow-x-hidden overflow-y-auto z-50`}
		>
			<div className="flex justify-center items-center w-full">
				<div
					className={`${
						showLogout ? 'h-full' : 'h-0'
					} bg-white dark:dark:bg-gray-800 rounded-md shadow-md p-2 pb-4 max-w-md mx-auto transition ease-in-out duration-700 z-10`}
				>
					<div className="flex flex-shrink-0 items-center justify-end p-1">
						{/* <XMarkIcon
							className="w-6 h-6 cursor-pointer text-gray-800 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-100 float-right p-1 rounded-full"
							onClick={() => setShowLogout(false)}
						/> */}
						<button
							onClick={() => setShowLogout(false)}
							className="text-xl float-right text-white"
						>
							Cancel
						</button>
					</div>
					<div className="p-2 px-4">
						<h1 className="text-lg font-semibold  text-gray-800 dark:text-gray-200 px-2">
							Are You sure you want to Logout
						</h1>
					</div>
					<button
						className="custom-btn bg-red-500 rounded-md hover:bg-red-300 cursor-pointer w-full text-center"
						onClick={handlelogout}
						disabled={loading}
					>
						Log out
					</button>
				</div>
			</div>
		</div>
	);
};

export default LogoutModal;
