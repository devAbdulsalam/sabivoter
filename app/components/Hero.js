"use client";
import { useRouter } from "next/navigation";
// import next/image
import Image from "next/image";
// import hero image
import hero from "./../../public/assets/voter.png";

// import animations and framer-motion
import {
	SectionAnimation,
	TextAnimation,
	titleAnim,
	PictureAnimation,
} from "../../utils/animation";
import { motion } from "framer-motion";

const Hero = () => {
	const router = useRouter();
	return (
		<section
			id="home"
			className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
		>
			<div className="container mx-auto h-full">
				<motion.div
					variants={SectionAnimation}
					initial="hidden"
					animate="show"
					className="flex items-center h-full pt-8"
				>
					<motion.div
						variants={TextAnimation}
						className="flex-1 flex flex-col items-center lg:items-start"
					>
						<motion.h1
							variants={titleAnim}
							className="text-2xl text-accent text-md mb-[22px]"
						>
							Sabi Voter
						</motion.h1>
						<motion.h2
							variants={titleAnim}
							className="text-subtitle text-gray-600 text-4xl leading-[44px] md:text-3xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]"
						>
							Together let
							<br /> make our vote count.
						</motion.h2>
						<motion.p
							variants={titleAnim}
							className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left"
						>
							Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
							dolor elit.
						</motion.p>
						<motion.button
							variants={titleAnim}
							onClick={() => router.push("/signin")}
							className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all"
						>
							Vote now
						</motion.button>
					</motion.div>
					<motion.div
						variants={PictureAnimation}
						className="hidden lg:flex flex-1 justify-end items-end h-full"
					>
						<Image
							src={hero}
							alt=""
							className="min-w-[600px] h-[600px]"
							priority
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
