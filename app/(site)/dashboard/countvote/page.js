import React from 'react';
import { getData } from '@/utils/AxiosApis';
import { notFound } from 'next/navigation';
// import Image from 'next/image';
import Tr from './Tr';
// import Hero from '@/public/assets/avatar.png';
const page = async () => {
	let data = await getData('vote');
	if (!data) return notFound();
	return (
		<div className="bg-primary w-full h-full">
			<section className="py-4 sm:py-7 bg-blue-100">
				<div className="container max-w-screen-xl mx-auto px-4">
					<h1 className="text-bold text-2xl">ALL Votes</h1>
				</div>
			</section>
			<div className="w-full mx-auto h-full py-4 px-4 sm:py-7">
				<div className="mt-6 overflow-x-auto">
					<table className="w-full table-auto">
						<thead className="">
							<tr className="text-xs md:text-sm font-semibold  text-center border-b-2 border-blue-500 uppercase">
								<th className="px-4 py-3">S/N</th>
								<th className="px-4 py-3 whitespace-nowrap">Election Name</th>
								<th className="px-4 py-3">Party</th>
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
			</div>
			;
		</div>
	);
};

export default page;
