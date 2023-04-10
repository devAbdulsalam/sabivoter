"use client";
import Link from "next/link";
const Election = ({ election }) => {
	const { _id:id, electionName, beginAt:Start, endAt:End } = election;
	const voteCandidate = (id) => {
		console.log("vote" + id);
	};
	return (
		<div className="py-4 px-2 text-lg w-full bg-gray-100 shadow-md rounded-md p-1">
			<Link className="text-xl font semibold" href={`/elections/${id}`}>
				{electionName}
			</Link>
			<p className="text-green-500 pt-2 whitespace-nowrap text-sm">
				Start on: <span>{Start}</span>
			</p>
			<p className="text-green-500 pb-2 whitespace-nowrap text-sm">
				Ends on:<span>{End}</span>
			</p>
			<p
				className={`
					election?.status?.msg === "Running"
						? "text-green-500"
						: "text-red-500"`}
			>
				{election?.status?.msg}
			</p>

			<div>
				{election?.status?.msg === "Running" ? (
					<div className="flex gap-2">
						<button
							onClick={() => voteCandidate(id)}
							className="btn btn-md bg-green-500 hover:bg-green-400 md:btn-lg transition-all"
						>
							Vote
						</button>
						<Link
							href={`elections/${id}/votes`}
							className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all"
						>
							View Result
						</Link>
					</div>
				) : (
					<Link
						href={`elections/${id}/votes`}
						className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all"
					>
						View Result
					</Link>
				)}
			</div>
		</div>
	);
};
export default Election;
