// "use server"
// import React from 'react'
// import Image from 'next/image'
import Link from "next/link";

const page = async ({ params }) => {
	// const election = projectsData.filter((item) => item.id === params.election)
	return (
		<section className="section w-full flex flex-col gap-1 py-10 px-10">
			<div className="container">
				<div className="text-center">
					<h2 className="text-title py-10 text-3xl font-semibold">
						Election Name
					</h2>
				</div>
				<div className="w-full flex gap-1 py-10">
					{/* <div className="p-4">
                <Image src={election[0].image} alt="election image"/>
            </div> */}
					<div className="mx-2 p-4">
						{/* <div className="p-2 bg-slate-400 rounded-md shadow-md">
                  <h3 className='text-xl font-semibold p-2'>{election[0].name}</h3>
                  <p className='text-xl text-paragraph p-2'>{election[0].name}</p>
                  <p className="text-green-500 p-2">from: <span>28, feb, 2021</span>to<span>28, feb, 2021</span></p>
              </div> */}
						<div className="flex gap-10 space-x-2 my-2">
							<Link
								href={`elections/${"electionname"}/candidates`}
								className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all"
							>
								Candidate
							</Link>
							<Link
								href={`elections/${"electionname"}/votes`}
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
