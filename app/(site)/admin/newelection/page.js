"use client";
import axios from "axios";
import React, { useState } from "react";

// Cookie: cookie_for_data,

const page = () => {
	const [electionName, setElectionName] = useState("");
	const [beginAt, setBeginAt] = useState("");
	const [endAt, setEndAt] = useState("");
	const [error, setIsError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = { electionName, beginAt, endAt };
		console.log(data);
		setIsLoading(true);
		if (data) {
			axios
				.post("https://vote-me.cyclic.app/api/v1/addElection", data, {
					withCredentials: true,
				})
				.then((res) => res.data)
				.then((data) => {
					setSuccess(data.msg);
					setIsLoading(false);
				})
				.catch((error) => {
					console.log(error.message);
					setIsError(error.message);
					setIsLoading(false);
				});
		} else {
			setIsError("all inputs are required");
			setIsLoading(false);
		}
	};
	return (
		<div className="text-2xl flex flex-col justify-center items-center h-[100%] bg-white debug w-full p-20 mt-10">
			<div>
				<h1 className="text-center text-xl md:text-2xl font-bold py-3 text-green-500">
					Create New Election
				</h1>
			</div>
			<form
				onSubmit={handleSubmit}
				className="w-full md:max-w-[450px] mx-auto md:my-6 shadow-lg bg-gray-50 rounded-md flex flex-col p-4"
			>
				<div className="my-1">
					<label htmlFor="name" className="text-lg font-semibold">
						Election Name:
					</label>
					<input
						onChange={(e) => setElectionName(e.target.value)}
						className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						type="text"
						value={electionName}
						placeholder="Presidential Election"
						id="name"
						name="name"
						autoComplete="text"
					></input>
				</div>
				<div>
					<label htmlFor="beginAt" className="text-lg font-semibold">
						Start Data
					</label>
					<input
						onChange={(e) => setBeginAt(e.target.value)}
						className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						type="date"
						value={beginAt}
						id="beginAt"
					></input>
				</div>
				<div>
					<label htmlFor="endAt" className="text-lg font-semibold">
						End Date
					</label>
					<input
						onChange={(e) => setEndAt(e.target.value)}
						className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						type="date"
						value={endAt}
						id="endAt"
					></input>
				</div>
				<div>
					<button
						className="bg-[#228e01] w-full text-white py-3 my-2 mt-4 rounded font-semibold text-xl"
						disabled={isLoading}
					>
						{isLoading ? "Loading..." : "Create Election"}
					</button>
				</div>
				<div>
					{error && (
						<div className="error duration-500 p-2 bg-red-300 text-red-800 text-center text-lg border-red-700 border-2 rounded-md">
							{error}
						</div>
					)}
					{success && (
						<div className="success duration-500 p-2 bg-green-300 text-green-800 text-center text-lg border-green-700 border-2 rounded-md">
							{success}
						</div>
					)}
				</div>
			</form>
		</div>
	);
};

export default page;
