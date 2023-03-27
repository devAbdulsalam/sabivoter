"use client";
import { useState, useEffect } from "react";
// import Link from 'next/link'
// import { useSession } from "next-auth/react";
import Election from "./election";
const election = () => {
	// const { data: session } = useSession();
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("https://vote-me.cyclic.app/api/v1/allElection")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setData(data.msg);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setError("notfound");
			});
	}, []);

	return (
		<div className="section bg-tertiary py-10 w-full">
			<div className="container mx-auto h-full py-10">
				<div>
					<h2 className="section-title text-center">Elections</h2>
				</div>
				{data?.map((item, idx) => (
					<Election key={idx} election={item} />
				))}
				{error ? <p className="py-20 text-2xl">Election not found</p> : ""}
				{isLoading ? <p className="py-20 text-2xl">Loading Elections</p> : ""}
			</div>
		</div>
	);
};
export default election;
