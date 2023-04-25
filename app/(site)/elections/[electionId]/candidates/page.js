'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import avatar from '../../../../../public/assets/avatar.png';
// import { getData } from "../../../../../utils/AxiosApis";
import axios from 'axios';
// import animations and framer-motion
import { useAnimation, motion } from 'framer-motion';
import {
	ProjAnimation,
	SingleProjectAnim,
} from '../../../../../utils/animation';
import { useInView } from 'react-intersection-observer';

const Candidate = ({ params }) => {
	const [candidates, setCandidates] = useState([]);
	const [error, setError] = useState(false);
	useEffect(() => {
		axios
			.get(`/api/elections/${params.electionId}/candidate`, {
				credentials: 'include',
			})
			.then((res) => setCandidates(() => res.data))
			.catch((error) => {
				setError(error?.response?.data?.error || error.message);
			});
	});
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
			<div className="flex flex-col items-center text-center">
				<h2 className="text-2xl my-2 text-green-500 font-semibold">
					The Candidates
				</h2>
				<p className="py-5 text-center text-red-500 text-xl">{error}</p>
				<p className="subtitle text-red-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
					labore nisium illum cupiditate reiciendis a numquam
				</p>
			</div>
		);
	}
	if (candidates) {
		return (
			<section id="candidate" className="">
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
					<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
						{candidates?.map((candidate, index) => {
							const { name, _id } = candidate;
							return (
								<motion.div
									variants={SingleProjectAnim}
									className="shadow-md p-3 rounded-md"
									key={index}
								>
									<Link
										href={`elections/${params.electionId}/candidates/${_id}`}
										className="text-accent rounded-sm flex justify-center items-center mb-2"
									>
										<Image
											src={avatar}
											alt="candidate"
											className="mx-auto object-cover"
										/>
									</Link>
									<h4 className="text-xl font-medium mb-2 text-green-500">
										{name}
									</h4>
									<div className="flex gap-2">
										<Link
											href={`../${params.electionId}/candidates/${_id}`}
											className="btn md:btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all"
										>
											Profile
										</Link>
										<button className="btn md:btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">
											Vote
										</button>
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
