"use client";
import React, { useState, useEffect } from "react";

const votes = async () => {
	const [vote, setVotes] = useState();
	useEffect(() => {
		const fetchPost = async () => {
			let res = await fetch(`https://vote-me.cyclic.app/api/v1/user/count`, {
				method: "Get",
				headers: {
					authorization: `bearer ${"token"}`,
				},
			});
			const data = await res.json();
			setVotes(data);
		};
		fetchPost();
	}, []);

	if (vote) {
		console.log(vote);
	}
	return (
		<div className="w-full p-20 mt-10 flex flex-col justify-center items-center space-x-2 h-[100%] bg-white">
			<h2 className="my-4 mx-auto text-2xl text-green-500">Votes counts</h2>
			<div>votes</div>
		</div>
	);
};

export default votes;
