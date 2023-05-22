'use client';
import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import { AiOutlineClose } from 'react-icons/ai';
// import { toast } from 'react-hot-toast';
import { useModalContext } from '@/context/ModalContext';

const LogoutModal = () => {
	const { showLogout, setShowLogout } = useModalContext();
	// const [loading, setLoading] = useState(false);
	// const {data: session} = useSession()
	// const [showPin, setShowPin] = useState(false);
	// const [showTopup, setShowTopup] = useState(false);

	const handlelogout = () => {
		signOut({ callbackUrl: '/signin' });
		setShowLogout(!showLogout);
	};

	return (
		<div
			style={{ transform: showLogout ? 'translateX(0)' : 'translateX(-200%)' }}
			className={`bg-black/80 fixed flex inset-0 h-screen justify-center items-center top-0 left-0 right-0 buttom-0 overflow-hidden z-50 transition-all duration-500 ease-in-out`}
		>
			<div className="flex justify-center items-center w-full">
				<div
					className={`${
						showLogout ? 'h-full' : 'h-0'
					} bg-white dark:dark:bg-gray-800 rounded-md shadow-md p-2 pb-4 max-w-md mx-auto transition ease-in-out duration-700 z-10`}
				>
					<div className="flex flex-shrink-0 items-center justify-end p-1">
						<AiOutlineClose
							className="w-6 h-6 cursor-pointer text-gray-800 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-100 float-right p-1 rounded-full"
							onClick={() => setShowLogout(false)}
						/>
					</div>
					<div className="p-2 px-4">
						<h1 className="text-lg font-semibold  text-gray-800 dark:text-gray-200 px-2">
							Are You sure you want to Logout
						</h1>
					</div>
					<button
						className="custom-btn bg-red-500 rounded-md hover:bg-red-300 cursor-pointer w-full text-center"
						onClick={handlelogout}
					>
						Log out
					</button>
				</div>
			</div>
		</div>
	);
};

export default LogoutModal;
