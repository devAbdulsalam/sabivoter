import React from "react";
import LoginButton from "../components/auth/SignInButton";
// import navigation data
import { navigation } from "../Data";
// import Link
import Link from "next/link";

const Nav = () => {
	return (
		<nav>
			<ul className="flex space-x-8 capitalize text-[15px]">
				{navigation.map((item, idx) => {
					return (
						<li
							className="text-accent hover:text-accent/10 cursor-pointer"
							key={idx}
						>
							<Link
								href={item.href}
								activeClass="active"
								className="transition-all duration-300"
							>
								{item.name}
							</Link>
						</li>
					);
				})}
				<li>
					<LoginButton />
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
