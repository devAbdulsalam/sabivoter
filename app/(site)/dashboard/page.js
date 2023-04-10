import React from "react";
import { Link } from "next/link";

const page = () => {
	return (
		<div className="flex text-2xl font-semibold p-10">
			<Link href="./elections">Elections</Link>
			<Link href="./elections/countvote">Count Votes</Link>
		</div>
	);
};

export default page;
