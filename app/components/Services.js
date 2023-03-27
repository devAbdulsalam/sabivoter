import React from "react";
// import components
import Service from "./Service";
import { projectsData } from "../Data";

const Services = () => {
	return (
		<div id="services" className="w-full lg:h-screen p-2 bg-primary">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<h2 className="section-title text-[#5651e5] pt-10 text-center before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
					Services
				</h2>
				<h3 className="section-subtitle tracking-widest uppercase text-center text-[#5651e5]">
					What We Do
				</h3>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
					{projectsData.map((item) => {
						return <Service item={item} key={item.id} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Services;
