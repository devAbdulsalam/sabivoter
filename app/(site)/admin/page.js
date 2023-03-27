"use client";

import Link from "next/link";
import { useEffect } from "react";
import Router from "next/router";
import { useSession } from "next-auth/react";
const page = () => {
	const { status, data } = useSession();

	useEffect(() => {
		if (status === "unauthenticated") Router, replace("/auth/signin");
	}, [status]);
	if (status === "authenticated") console.log(status);
	console.log(data);
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
