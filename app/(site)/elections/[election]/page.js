// "use server"
// import React from 'react'
import Image from "next/image";
import Link from "next/link";
import avatar from "../../../../public/assets/avatar.png";

const page = async ({ params }) => {
	// const election = projectsData.filter((item) => item.id === params.election)
	return (
		<section className="section w-full flex flex-col gap-1 py-10 px-10">
			<div className="container">
				<h2 className="text-center text-title py-2 text-2xl text-green-500 font-semibold">
					Election Name
				</h2>
				<div className="w-full flex gap-2 py-2">
					<div className="mx-2">
						<Image src={avatar} alt="election" className="rounded-md" />
					</div>
					<div className="mx-2">
						<div className="p-2 rounded-md shadow-md">
							<p className="subtitle">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
								veniam labore nisium illum cupiditate reiciendis a numquam
							</p>
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
};
export default page;
