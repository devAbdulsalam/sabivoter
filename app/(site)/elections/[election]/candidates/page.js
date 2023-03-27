"use client";
import { useEffect } from "react";
import Link from "next/link";
import { services } from "../../../../Data";
// import animations and framer-motion
import { useAnimation, motion } from "framer-motion";
import {
	ProjAnimation,
	SingleProjectAnim,
} from "../../../../../utils/animation";
import { useInView } from "react-intersection-observer";

const Candidate = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("show");
		} else {
			controls.start("hidden");
		}
	}, [controls, inView]);
	return (
		<section id="services" className="section bg-tertiary">
			<motion.div
				ref={ref}
				variants={ProjAnimation}
				initial="hidden"
				animate={controls}
				className="container mx-auto p-4"
			>
				<div className="flex flex-col items-center text-center">
					<h2 className="text-2xl my-2">The Candidates</h2>
					<p className="subtitle">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
						labore nisium illum cupiditate reiciendis a numquam
					</p>
				</div>
				<div className="grid lg:grid-cols-4 gap-8">
					{services.map((service, index) => {
						const { icon, name, description } = service;
						return (
							<motion.div
								variants={SingleProjectAnim}
								className="bg-secondary p-6 rounded-2xl"
								key={index}
							>
								<Link
									href={`elections/election/electiontype/${name}`}
									className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]"
								>
									{icon}
								</Link>
								<h4 className="text-xl font-medium mb-2">{name}</h4>
								<p>{description}</p>
							</motion.div>
						);
					})}
				</div>
			</motion.div>
		</section>
	);
};

export default Candidate;
