// import { headers } from 'next/headers';
// import { cookies } from "next/headers";

// async function getUsers() {
//   const headersInstance = headers()
//   const authorization = headersInstance.get('authorization')
//   // Forward the authorization header
//   const res = await fetch("https://vote-me.cyclic.app//api/v1/all", {
// 		headers: { authorization },
// 	});
//   return res.json()
// }
import Link from "next/link";
// import { useEffect } from "react";
// import Router from "next/router";
// import { useSession } from "next-auth/react";
// import { cookies } from "next/headers";
const page = async () => {
	
	// const theme = cookieStore.get("theme");
	return (
		<>
			<div className="py-10 text-blue-500">
				<h2 className="text-2xl text-center">Admin Dashboard page</h2>
			</div>
			<p>About page</p>
			<p>i am about page</p>
			<div className="text-green-500 text-center">
				<Link href="/">Home</Link>
			</div>
		</>
	);
};

export default page;
