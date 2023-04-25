'use client';
import axios from 'axios';
import React, { useState } from 'react';
import Toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

// Cookie: cookie_for_data,

const page = () => {
	const [electionName, setElectionName] = useState('');
	const [beginAt, setBeginAt] = useState('');
	const [endAt, setEndAt] = useState('');
	const [details, setDetials] = useState('');
	const [error, setIsError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = { electionName, details, beginAt, endAt };
		setIsLoading(true);
		if (data) {
			axios
				.post('http://localhost:3000/api/elections', data, {
					withCredentials: true,
				})
				.then((res) => res.data)
				.then((data) => {
					setSuccess(data.msg);
					setIsLoading(false);
					setTimeout(() => {
						setSuccess(null);
						setElectionName('');
						setBeginAt('');
						setEndAt('');
						router.push(`/admin/newelection/${data?.election?._id}`);
					}, 2000);
				})
				.catch((error) => {
					console.log(
						error.response?.data?.error || error?.message || 'Network error'
					);
					setIsError(
						error.response?.data?.error || error?.message || 'Network error'
					);
					setIsLoading(false);
					setTimeout(() => {
						setIsError(null);
					}, 1000);
				});
		} else {
			setIsError('All inputs are required');
			setIsLoading(false);
		}
	};
	return (
		<div className="text-2xl flex flex-col justify-center items-center h-[100%] bg-white w-full p-20 mt-10">
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
				<div className="my-1">
					<label htmlFor="detail" className="text-lg font-semibold">
						Election Details:
					</label>
					<input
						onChange={(e) => setDetials(e.target.value)}
						className="px-3 my-1 py-1.5 text-base w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						type="text"
						value={details}
						placeholder="Breif Details of the election"
						id="detail"
						name="detail"
						autoComplete="text"
					></input>
				</div>
				<div>
					<button
						className="bg-[#228e01] w-full text-white py-3 my-2 mt-4 rounded font-semibold text-xl"
						disabled={isLoading}
					>
						{isLoading ? 'Loading...' : 'Create Election'}
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
