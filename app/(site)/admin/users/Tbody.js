`use client`;
import React, { useState, useEffect } from 'react';
import Tr from './Tr';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
// import { useModalContext } from '@/context/ModalContext';
// import hero from '@/public/assets/avatar.png';

const Tbody = () => {
	const { status, data: session } = useSession();
	const [data, setData] = useState([]);
	useEffect(() => {
		axios('/api/users')
			.then(res => res.data)
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				toast.error(
					error.response?.data?.error || error?.message || 'Network error'
				);
			})
				
	}, []);

	if (status === 'loading') {
		return <div className="w-full text-center">Loading...</div>;
	}
	return data && data.length > 0 ? (
		<>
			<div className="mt-6 overflow-x-auto">
				<table className="w-full table-auto shadow-sm">
					<thead className="">
						<tr className="text-xs md:text-sm font-semibold  text-center border-b-2 border-blue-500 uppercase">
							<th className="px-4 py-3">S/N</th>
							<th className="px-4 py-3 whitespace-nowrap">Full Name</th>
							<th className="px-4 py-3">Email</th>
							<th className="px-4 py-3">NIN</th>
							<th className="px-4 py-3">Role</th>
							<th className="px-4 py-3 whitespace-nowrap">
								Elections Eligible
							</th>
							<th className="px-4 py-3 whitespace-nowrap">Elections Voted</th>
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
		<div className="text-red-300 py-10 text-lg">No Available Users</div>
	);
};

export default Tbody;
