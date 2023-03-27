// "use client";

import { cookies } from "next/headers";
import Link from "next/link";
const Elections = async ({ elections }) => {
	const cookieStore = cookies();
	const theme = cookieStore.get("theme");
	console.log(theme);
	return (
		<div className="text-2xl">
			<h2 className="text-center text-lg py-2 font-semibold">Elections</h2>
			<div className="text-base flex flex-col space-y-2">
				{elections?.map((item, idx) => (
					<Link
						key={idx}
						href={`/elections/${item.id}`}
						className="whitespace-nowrap"
					>
						{item.Name}
					</Link>
				))}
			</div>
		</div>
	);
};
export default Elections;
