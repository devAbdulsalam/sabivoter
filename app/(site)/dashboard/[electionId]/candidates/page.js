'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import avatar from '@/public/assets/avatar2.png';
// import { getData } from "../../../../../utils/AxiosApis";
import axios from 'axios';
// import animations and framer-motion
import { useAnimation, motion } from 'framer-motion';
import { ProjAnimation, SingleProjectAnim } from '@/utils/animation';
import { useInView } from 'react-intersection-observer';
import BreadCrumbs from '../../../../components/ui/BreadCrumbs';
import VoteBtn from '../../../../components/ui/VoteBtn';

const Candidate = ({ params }) => {
	const [candidates, setCandidates] = useState([]);
	const [error, setError] = useState(false);
	const breadCrumbs = [
		{ name: 'Home', url: '/' },
		{
			// name: `${election?.electionName?.substring(0, 100)} ...`,
			name: `electionName`,
			url: `/dashboard/${params.electionId}/candidates/${params?.electionId}`,
		},
		{
			name: `candidates`,
			url: `/dashboard/${params?.electionId}/candidates`,
		},
	];
	useEffect(() => {
		axios
			.get(`/api/elections/${params.electionId}/candidate`, {
				credentials: 'include',
			})
			.then((res) => setCandidates(() => res.data))
			.catch((error) => {
				setError(error?.response?.data?.error || error.message);
			});
	}, [params]);
	const controls = useAnimation();
	const { ref, inView } = useInView();
	useEffect(() => {
		if (inView) {
			controls.start('show');
		} else {
			controls.start('hidden');
		}
	}, [controls, inView]);
	if (error) {
		return (
			<div className="flex flex-col place-content-center text-center  h-full">
				<p className="py-5 text-red-500 text-2xl font-semibold">{error}</p>
				<p className="text-xl text-red-500">
					Pleace check you network connection or reload page
				</p>
			</div>
		);
	}
	if (candidates) {
		return (
			<section id="candidate" className="w-full h-[100%]">
				<BreadCrumbs breadCrumbs={breadCrumbs} />
				<motion.div
					ref={ref}
					variants={ProjAnimation}
					initial="hidden"
					animate={controls}
					className="container mx-auto p-4"
				>
					<div className="flex flex-col items-center text-center">
						<h2 className="text-2xl my-2 text-green-500 font-semibold">
							The Candidates
						</h2>
						<p className="subtitle">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
							veniam labore nisium illum cupiditate reiciendis a numquam
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{candidates?.map((candidate, index) => {
							const { name, _id, image, party } = candidate;
							return (
								<motion.div
									variants={SingleProjectAnim}
									className="shadow-md p-3 rounded-md border"
									key={index}
								>
									<Link
										href={`/dashboard/${params.electionId}/candidates/${_id}`}
										className="text-accent rounded-sm flex justify-center items-center mb-2"
									>
										<Image
											src={image?.url || avatar}
											alt="candidate"
											width={120}
											height={120}
											className="mx-auto object-cover w-auto h-auto jj"
										/>
									</Link>
									<h4 className="text-xl font-medium mb-2 text-gray-500">
										<span className="text-gray-800">Name: </span>
										{name}
									</h4>
									<h3 className="text-xl font-medium mb-2 text-green-500">
										<span className="text-gray-800">Party: </span>
										{party}
									</h3>
									<div className="flex gap-2 justify-between">
										<VoteBtn
											election={params.electionId}
											candidate={candidate}
										/>
										<Link
											href={`/dashboard/${params.electionId}/candidates/${_id}`}
											className="btn md:btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all"
										>
											Profile
										</Link>
									</div>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</section>
		);
	}
};

export default Candidate;
