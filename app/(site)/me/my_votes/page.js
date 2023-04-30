'use client';
import React from 'react';
// import { getData } from '@/utils/AxiosApis';
// let data = await getData(`http://localhost:3000/api/users`);
import Tbody from './Tbody';
const page = () => {
	return (
		<div className="w-full px-4 py-8 mx-auto  text-green-500 bg-white">
			<div className="flex justify-between w-full px-4 py-2 items-center">
				<div className="text-xl font-bold">List of My Votes</div>
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
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
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
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
							/>
						</svg>
					</button>
				</div>
			</div>
			<Tbody />
		</div>
	);
};

export default page;
