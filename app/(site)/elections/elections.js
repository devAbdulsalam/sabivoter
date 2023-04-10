// "use client";
// import Link from "next/link";

const Elections = async ({ elections }) => {
	return (
		<div className="text-2xl">
			<h2 className="text-center text-lg py-2 font-semibold">Elections</h2>
			<div className="text-base flex flex-col space-y-2">
				{elections?.map((item, idx) => (
					<div key={idx} className="p-1 hover:text-accent">
						{item?.electionName}
					</div>
				))}
			</div>
		</div>
	);
};
export default Elections;
