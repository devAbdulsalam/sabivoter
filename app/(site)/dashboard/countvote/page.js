import React from 'react';
import { getData } from '@/utils/AxiosApis';
import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import Hero from '@/public/assets/avatar.png';
const page = async () => {
	let data = await getData('votes');
	if (!data) return notFound();
	return (
		<div className="bg-primary w-full h-full">
			<section className="py-4 sm:py-7 bg-blue-100">
				<div className="container max-w-screen-xl mx-auto px-4">
					<h1 className="text-bold text-2xl">ALl Votes</h1>
				</div>
			</section>
			<div className="w-full mx-auto h-full py-4 px-4 sm:py-7">
			</div>;
		</div>
	);
};

export default page;
