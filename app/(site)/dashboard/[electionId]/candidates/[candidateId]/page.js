'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import avatar from '@/public/assets/avatar2.png';
import axios from 'axios';

const page = ({ params }) => {
	const [candidate, setCandidate] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get(
				`/api/elections/${params.electionId}/candidate/${params.candidateId}`,
				{
					credentials: 'include',
				}
			)
			.then((res) => {
				setLoading(false);
				setCandidate(() => res.data);
			})
			.catch((error) => {
				setLoading(false);
				setError(error?.response?.data?.error || error.message);
			});
	}, [params]);
	useEffect(() => {
		console.log(candidate?.profile);
	}, [candidate]);
	if (loading) {
		return (
			<div className="flex flex-col items-center text-center">
				<p className="text-2xl text-green-600">Loading</p>
			</div>
		);
	}
	if (error) {
		return (
			<div className="flex flex-col items-center text-center">
				<h2 className="text-2xl my-2 text-green-500 font-semibold">
					The Candidates
				</h2>
				<p className="py-5 text-center text-red-500 text-xl">{error}</p>
				<p className="subtitle text-red-500">
					Pleace check you network connection or reload page
				</p>
			</div>
		);
	}
	if (candidate) {
		return (
			<section className="section w-full flex flex-col gap-1 py-10 px-10">
				<div className="container">
					<h2 className="text-center text-title py-2 text-2xl text-green-500 font-semibold">
						{candidate?.name || 'Candidate Name'}
					</h2>
					<div className="w-full flex gap-2 py-2">
						<div className="mx-2">
							<Image
								src={candidate?.image?.url || avatar}
								alt="candidate"
								width={120}
								height={120}
								className="mx-auto object-cover"
							/>
						</div>
						<div className="mx-2">
							<div className="p-2 rounded-md shadow-md">
								<p className="subtitle">{candidate?.profile}</p>
								<p className="text-green-500 p-2">
									The Election will be held from: <span>28, feb, 2021</span> to
									<span>28, feb, 2021</span>
								</p>
							</div>
							<div className="flex gap-4 space-x-2 mt-2">
								<Link
									href={`elections/${params.election}/candidates`}
									className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all"
								>
									Candidate
								</Link>
								<Link
									href={`elections/${params.election}/votes`}
									className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all"
								>
									View Result
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
};

export default page;
