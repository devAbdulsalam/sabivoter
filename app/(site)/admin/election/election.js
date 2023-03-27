"use client";
import Link from "next/link";
const Election = ({ election }) => {
	const { id, Name, Start, End } = election;
	const voteCandidate = () => {
		console.log("id, name");
	};
	return (
		<div className="py-10 text-2xl">
			<li className="text-base">
				<Link href={`/elections/${id}`}>{Name}</Link>
			</li>
			<p>{id}</p>
			<p>{Start}</p>
			<p>{End}</p>
			<p>{election?.status?.msg}</p>
			<button
				onClick={() => voteCandidate()}
				className="text-white bg-green p-2 px-2 roounded-md"
			>
				Vote
			</button>
		</div>
	);
};
export default Election;
