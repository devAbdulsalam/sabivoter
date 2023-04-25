'use client';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { useModalContext } from '@/context/ModalContext';

const SignInButton = () => {
	const { status, data: session } = useSession();
	const { setShowLogout } = useModalContext();
	const [showProfile, setShowProfile] = useState(false);
	const handleShowProfile = () => {
		setShowProfile(!showProfile);
	};
	const handleSignout = () => {
		setShowLogout(true);
	};
	return (
		<>
			{status === 'loading' ? (
				<p className="text-gray-800">Loading...</p>
			) : session?.user ? (
				<div className="relative h-6 w-6">
					<button onClick={handleShowProfile}>
						{session?.user?.image ? (
							<Image
								src={session?.user?.user?.image}
								alt={session?.user?.user?.name}
								className="inline-block rounded-full"
								fill
							/>
						) : (
							<span className="inline-block h-6 w-6 overflow-hidden rounded-full bg-gray-100">
								<svg
									className="h-full w-full text-gray-300"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
								</svg>
							</span>
						)}
					</button>
					{showProfile ? (
						<div
							className={`${
								showProfile
									? 'flex top-[50px] -left-20'
									: 'hidden top-0 left-20'
							} absolute rounded-md mr-2 bg-white z-[995] text-gray-800 transition-all duration-300 ease-in-out place-items-center`}
						>
							<div className="pt-4 w-full">
								<div className="space-y-2 text-base w-full">
									<h2 className="text-gray-800 px-2 hover:bg-gray-50 transition duration-300 ease-in-out">
										{session?.user?.user?.name}
									</h2>
									<h2 className="text-gray-800 px-2 py-2 hover:bg-gray-50 transition duration-300 ease-in-out">
										{session?.user?.user?.email}
									</h2>
								</div>
								<div className="mt-2">
									<button
										className="text-sm font-medium tracking-wider uppercase px-2 py-2 text-stone-800 bg-red-50 hover:bg-red-100 transition duration-300 ease-in-out w-full"
										onClick={handleSignout}
									>
										Sign Out
									</button>
								</div>
							</div>
						</div>
					) : (
						''
					)}
				</div>
			) : (
				<button
					className="text-sm font-medium tracking-wider uppercase text-stone-500"
					onClick={() => signIn()}
				>
					Sign In
				</button>
			)}
		</>
	);
};

export default SignInButton;
