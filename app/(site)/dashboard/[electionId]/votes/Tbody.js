`use client`;
import React, { useState, useEffect } from 'react';
import Tr from './Tr';
import { useSession } from 'next-auth/react';
// import Image from 'next/image';
// import { useState } from 'react';
// import { useModalContext } from '@/context/ModalContext';
// import hero from '@/public/assets/avatar.png';

const Tbody = () => {
	const { status, data: session } = useSession();
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(session?.user?.voted);
	}, [session]);

	// console.log(session?.user?.voted);

	if (status === 'loading') {
		return <div className="w-full text-center">Loading...</div>;
	}
	return data && data.length > 0 ? (
		<>
			<div className="mt-6 overflow-x-auto">
				<table className="w-full table-auto">
					<thead className="">
						<tr className="text-xs md:text-sm font-semibold  text-center border-b-2 border-blue-500 uppercase">
							<th className="px-4 py-3">S/N</th>
							<th className="px-4 py-3 whitespace-nowrap">Full Name</th>
							<th className="px-4 py-3">Party</th>
							<th className="px-4 py-3 whitespace-nowrap ">Candidates Votes</th>
							<th className="px-4 py-3">Total Votes</th>
							<th className="px-4 py-3">Percentage</th>
						</tr>
					</thead>
					<tbody className="text-xs md:text-sm font-normal text-gray-700 text-center">
						{data?.map((obj, idx) => (
							<Tr key={obj._id || idx} obj={obj} idx={idx} />
						))}
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
		</>
	) : (
		<div className="text-red-300 py-10 text-lg">
			You have no election or not eligible to vote
		</div>
	);
};

export default Tbody;
