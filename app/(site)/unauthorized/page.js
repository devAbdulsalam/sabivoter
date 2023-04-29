'use client'
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// export const metadata = {
// 	title: 'Sabi voter || Unauthorized Page',
// 	description: 'Unauthorized Page',
// };

export default function Unauthorized() {
	// const router = useRouter();
	 const searchParams = useSearchParams();

		const message = searchParams.get('search');

	return (
		<>
			<h1 className="text-xl">Access Denied</h1>
			{message && <div className="mb-4 text-red-500">{message}</div>}
		</>
	);
}
