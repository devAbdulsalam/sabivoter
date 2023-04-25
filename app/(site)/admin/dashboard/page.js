'use client';
import { useModalContext } from '@/context/ModalContext';
// import { useState } from 'react'
const Votes = () => {
	const { setShowUpdate } = useModalContext();
	const handleAdd = () => {
		setShowUpdate(true);
	};

	return (
		<div className="items-center w-fuCLEARll px-4 py-4 mx-auto my-10 bg-white rounded-lg shadow-md sm:w-11/12 h-[100%] p-20">
			<div className="container mx-auto">
				<div className="flex justify-between w-full px-4 py-2 items-center">
					<div className="text-xl font-bold">List of Candidates</div>
					<button
						onClick={handleAdd}
						className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
					>
						Add new Candidate
					</button>
				</div>
				<div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:justify-between w-full px-4 mb-2 mt-4 items-center">
					<div className="flex bg-gray-100 w-full sm:w-2/5 items-center rounded-lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 mx-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
						<input
							className="w-full bg-gray-100 outline-none border-transparent focus:border-transparent focus:ring-0 rounded-lg text-sm"
							type="text"
							placeholder="Search a product..."
						/>
					</div>
					<div className="flex-row space-x-2 items-center ">
						<select
							className="border border-gray-300 rounded-md text-gray-600 px-2 pl-2 pr-8 bg-white hover:border-gray-400 focus:outline-none text-xs
               focus:ring-0"
						>
							<option>Filter by</option>
							<option>Name</option>
							<option>Party</option>
						</select>
						<select
							className="border border-gray-300 rounded-md text-gray-600 px-2 pl-2 pr-8 bg-white hover:border-gray-400 focus:outline-none text-xs
              focus:ring-0"
						>
							<option>Short by</option>
							<option>Name</option>
							<option>Party</option>
						</select>
						<button
							className="border border-gray-300 rounded-md text-gray-600 px-3 py-[9px] bg-white hover:border-gray-400 focus:outline-none text-xs
            focus:ring-0"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-3 w-3"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className="mt-6 overflow-x-auto">
					<table className="w-full table-auto">
						<thead className="">
							<tr className="text-sm font-semibold text-center border-b-2 border-blue-500 uppercase">
								<th className="px-4 py-3">Name</th>
								<th className="px-4 py-3">Party</th>
								<th className="px-4 py-3">Candidate votes</th>
								<th className="px-4 py-3">percentage</th>
								<th className="px-4 py-3">Total Votes</th>
								<th className="px-4 py-3">action</th>
							</tr>
						</thead>
						<tbody className="text-sm font-normal text-gray-700 text-center">
							<tr className="py-10 bg-gray-100 hover:bg-gray-200 font-medium">
								<td className="px-4 py-4">Monstera</td>
								<td className="px-4 py-4">48,00</td>
								<td className="px-4 py-4">39,02</td>
								<td className="px-4 py-4">A/22</td>
								<td className="items-center px-4 py-4">
									<div className="flex flex-col">
										<div className="font-medium text-red-500">10 pcs</div>
										<div className="text-xs text-gray-500">from 294 pcs.</div>
									</div>
								</td>
								<td className="px-4 py-4">10 pcs</td>
								<td className="items-center px-4 py-4">
									<div className="flex flex-col">
										<div className="font-medium ">10-02-2022</div>
										<div className="text-xs text-gray-500">10 days</div>
									</div>
								</td>
								<td className="px-4 py-4">
									<div className="flex-col lg:flex-row lg:space-x-2 items-center space-y-2 lg:space-y-0">
										<button className="items-center px-2 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
												/>
											</svg>
										</button>
										<button className="items-center px-2 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
												/>
											</svg>
										</button>
									</div>
								</td>
							</tr>
							<tr className="py-10 bg-white hover:bg-gray-200 font-medium">
								<td className="px-4 py-4">Angelonis</td>
								<td className="px-4 py-4">32,00</td>
								<td className="px-4 py-4">28,16</td>
								<td className="px-4 py-4">8/01</td>
								<td className="items-center px-4 py-4">
									<div className="flex flex-col">
										<div className="font-medium text-green-500">200 pcs</div>
										<div className="text-xs text-gray-500">from 294 pcs.</div>
									</div>
								</td>
								<td className="px-4 py-4">200 pcs</td>
								<td className="items-center px-4 py-4">
									<div className="flex flex-col">
										<div className="font-medium ">12-01-2022</div>
										<div className="text-xs text-gray-500">32 days</div>
									</div>
								</td>
								<td className="px-4 py-4">
									<div className="flex-col lg:flex-row lg:space-x-2 items-center space-y-2 lg:space-y-0">
										<button className="items-center px-2 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
												/>
											</svg>
										</button>
										<button className="items-center px-2 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
												/>
											</svg>
										</button>
									</div>
								</td>
							</tr>
							<tr className="py-10 bg-gray-100 hover:bg-gray-200 font-medium">
								<td className="px-4 py-4">Begonias</td>
								<td className="px-4 py-4">16,00</td>
								<td className="px-4 py-4">13,20</td>
								<td className="px-4 py-4">A/02</td>
								<td className="items-center px-4 py-4">
									<div className="flex flex-col">
										<div className="font-medium text-green-500">140 pcs</div>
										<div className="text-xs text-gray-500">from 200 pcs.</div>
									</div>
								</td>
								<td className="px-4 py-4">140 pcs</td>
								<td className="items-center px-4 py-4">
									<div className="flex flex-col">
										<div className="font-medium ">24-01-2022</div>
										<div className="text-xs text-gray-500">62 days</div>
									</div>
								</td>
								<td className="px-4 py-4">
									<div className="flex-col lg:flex-row lg:space-x-2 items-center space-y-2 lg:space-y-0">
										<button className="items-center px-2 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
												/>
											</svg>
										</button>
										<button className="items-center px-2 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
												/>
											</svg>
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="flex flex-col items-center w-full px-4 py-4 text-sm text-gray-500 justify-center mx-auto">
					<div className="flex items-center justify-between space-x-2">
						<a href="#" className="hover:text-gray-600">
							Previous
						</a>
						<div className="flex flex-row space-x-1">
							<div className="flex px-2 py-px text-white bg-blue-400 border border-blue-400">
								1
							</div>
							<div className="flex px-2 py-px border border-blue-400 hover:bg-blue-400 hover:text-white">
								2
							</div>
						</div>
						<a href="#" className="hover:text-gray-600">
							Next
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Votes;
