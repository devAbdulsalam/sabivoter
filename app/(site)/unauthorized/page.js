import { useRouter } from 'next/navigation';
import React from 'react';

export const metadata = {
	title: 'Sabi voter || Unauthorized Page',
	description: 'Unauthorized Page',
};

export default function Unauthorized() {
	const router = useRouter();
	const { message } = router.query;

	return (
		<>
			<h1 className="text-xl">Access Denied</h1>
			{message && <div className="mb-4 text-red-500">{message}</div>}
		</>
	);
}
