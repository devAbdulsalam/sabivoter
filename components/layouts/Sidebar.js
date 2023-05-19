'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import avater image
import avatar from '@/public/assets/avatar.png';
import { useSession } from 'next-auth/react';
import { useModalContext } from '@/context/ModalContext';

const Sidebar = () => {
	const { data: session } = useSession();
	const { setShowModal } = useModalContext();
	return (
		<aside
			style={{ minHeight: '716px' }}
			className="w-64 md:w-72 absolute sm:relative shadow md:h-screen flex-col justify-between hidden sm:flex"
		>
			<div className="px-8">
				<div className="flex flex-col items-center -mx-2">
					<Image
						className="object-cover w-16 h-16 border-2 border-black bg-green-50 mx-2 my-2 rounded-full "
						src={avatar}
						width={100}
						height={100}
						alt="avatar"
					/>
					<p className="mx-2 mt-1 text-md font-medium  text-black-500 -yellow-400 ">
						{session?.user?.name}
					</p>

					<p className="mx-2 mt-1 text-sm font-medium  text-black -yellow-400 ">
						{session?.user?.role}
					</p>
				</div>
				<div className="flex flex-col justify-between flex-1 mt-10  ">
					<nav className="">
						<Link
							href="/dashboard"
							className=" text-white bg-green-600 hover:bg-green-500 py-2 px-1 flex items-center focus:outline-none focus:ring-2 focus:ring-white mb-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-grid"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z"></path>
								<rect x="4" y="4" width="6" height="6" rx="1"></rect>
								<rect x="14" y="4" width="6" height="6" rx="1"></rect>
								<rect x="4" y="14" width="6" height="6" rx="1"></rect>
								<rect x="14" y="14" width="6" height="6" rx="1"></rect>
							</svg>
							<span className="text-sm ml-2">Dashboard</span>
						</Link>
						{session?.user && session?.user?.role === 'admin' ? (
							<>
								<Link
									href="/admin/election"
									className="flex items-center focus:outline-none focus:ring-2 focus:ring-white py-2 px-1 mb-2 hover:bg-blue-100 hover:text-blue-500"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-puzzle"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z"></path>
										<path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
									</svg>
									<span className="text-sm ml-2">Elections</span>
								</Link>

								<Link
									href="/admin/users"
									className="flex items-center focus:outline-none focus:ring-2 focus:ring-white py-2 px-1 mb-2 hover:bg-blue-100 hover:text-blue-500"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-compass"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z"></path>
										<polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
										<circle cx="12" cy="12" r="9"></circle>
									</svg>
									<span className="text-sm ml-2">
										All Users <span className="text-red-500">(Admin)</span>
									</span>
								</Link>
								<Link
									href="/admin/newelection"
									className="flex items-center focus:outline-none focus:ring-2 focus:ring-white py-2 px-1 mb-1 hover:bg-blue-100 hover:text-blue-500"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-compass"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z"></path>
										<polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
										<circle cx="12" cy="12" r="9"></circle>
									</svg>
									<span className="text-sm ml-2">
										New Election <span className="text-red-500">(Admin)</span>
									</span>
								</Link>
								<Link
									href="/admin/newcandidate"
									className="flex items-center focus:outline-none focus:ring-2 focus:ring-white py-2 px-1 mb-1 hover:bg-blue-100 hover:text-blue-500"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-compass"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z"></path>
										<polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
										<circle cx="12" cy="12" r="9"></circle>
									</svg>
									<span className="text-sm ml-2">New Candidate</span>
								</Link>
								<Link
									href="/admin/newparty"
									className="flex items-center focus:outline-none focus:ring-2 focus:ring-white py-2 px-1 mb-1 hover:bg-blue-100 hover:text-blue-500"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-compass"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z"></path>
										<polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
										<circle cx="12" cy="12" r="9"></circle>
									</svg>
									<span className="text-sm ml-2">
										New Party <span className="text-red-500">(Admin)</span>
									</span>
								</Link>
								<hr />
							</>
						) : (
							''
						)}
						<>
							<Link
								href="/me"
								className="block text-sm px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
							>
								Your Profile
							</Link>

							<Link
								href="/me/my_votes"
								className="block text-sm px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
							>
								Votes
							</Link>

							<Link
								href="/me/update"
								className="block text-sm px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
							>
								Update Profile
							</Link>

							<Link
								href="/me/update_password"
								className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
							>
								Update Password
							</Link>
						</>
						<button
							onClick={() => setShowModal(true)}
							className="block text-left px-3 w-full py-2 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
						>
							Logout
						</button>
					</nav>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
