'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { getData } from "@/utils/AxiosApis";
// import Tbody from '../../../me/my_votes/Tbody';
const page = ({ params }) => {
	const [votes, setVotes] = useState([]);
	const [error, setError] = useState(false);
	useEffect(() => {
		axios
			.get(`/api/elections/${params.electionId}/votes`, {
				credentials: 'include',
			})
			.then((res) => {
				console.log(res.data[0].votes);
				setVotes(() => res.data.votes);
			})
			.catch((error) => {
				console.log(error);
				setError(error?.response?.data?.error || error.message);
			});
	}, [params]);
	useEffect(() => {
		console.log(votes);
	}, [votes]);
	return (
		<div className="items-center w-full px-4 py-8 mx-auto my-2 text-green-500 bg-white rounded-lg shadow-md sm:w-11/12">
			<div className="container mx-auto">
				<div className="flex justify-between w-full px-4 py-2 items-center">
					<div className="text-xl font-bold">My Votes</div>
					<button className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none">
						Print results
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
							className="w-full bg-gray-100 outline-none py-2 border-transparent focus:border-transparent focus:ring-0 rounded-lg text-sm"
							type="text"
							placeholder="Search a candidate..."
						/>
					</div>
					<div className="flex-row space-x-2 items-center ">
						<select
							className="border border-gray-300 rounded-md text-gray-600 px-2 py-2 pl-2 pr-8 bg-white hover:border-gray-400 focus:outline-none text-xs
               focus:ring-0"
						>
							<option>Filter by</option>
							<option>Name</option>
							<option>Party</option>
							<option>Vote</option>
						</select>
						<select
							className="border border-gray-300 rounded-md text-gray-600 px-2 pl-2 py-2 pr-8 bg-white hover:border-gray-400 focus:outline-none text-xs
              focus:ring-0"
						>
							<option>Short by</option>
							<option>Name</option>
							<option>Party</option>
							<option>Vote</option>
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
							<tr className="text-xs md:text-sm font-semibold  text-center border-b-2 border-blue-500 uppercase">
								<th className="px-4 py-3">S/N</th>
								<th className="px-4 py-3 whitespace-nowrap">Full Name</th>
								<th className="px-4 py-3">Party</th>
								<th className="px-4 py-3 whitespace-nowrap ">
									Candidates Votes
								</th>
								<th className="px-4 py-3">Total Votes</th>
								<th className="px-4 py-3">Percentage</th>
							</tr>
						</thead>
						{/* <Tbody /> */}
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

export default page;
