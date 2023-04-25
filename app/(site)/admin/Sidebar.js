// import React from 'react'
import { navLinks } from '@/utils/Data';
import Link from 'next/link';

const Sidebar = () => {
	return (
		<div className=" bg-black text-white p-4 items-center justify-center h-[100%] mt-10 w-64 absolute sm:relative shadow md:h-screen flex-col hidden sm:flex">
			<ul className="py-10 space-y-8 capitalize text-[15px]">
				{navLinks.map((item, idx) => {
					return (
						<li
							className="text-white hover:text-accent cursor-pointer"
							key={idx}
						>
							<Link href={item.href}>{item.name}</Link>
						</li>
					);
				})}

				<li>
					<>LoginButton</>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
