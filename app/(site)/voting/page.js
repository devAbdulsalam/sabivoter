import React from "react";
import Link from "next/link";

const page = async () => {
	return (
		<div className="flex text-2xl font-semibold p-20 text-green-500">
			<Link href="./elections">Elections</Link>
			<Link href="./elections/countvote">Count Votes</Link>
		</div>
	);
};

export default page;
