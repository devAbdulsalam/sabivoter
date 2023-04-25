'use client';

import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import Link from 'next/link';

// import components
import Nav from './Nav';
import NavMobile from './NavMobile';
// import logo
// import Logo from './../../public/assets/logo.svg';

const Header = () => {
	const [bg, setBg] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			return window.scrollY > 50 ? setBg(true) : setBg(false);
		});
	});

	return (
		<header
			className={`${
				bg ? 'bg-gray-100 h-20' : 'h-24'
			} flex items-center  fixed top-0 w-full text-white z-10 transition-all duration-300 shadow-md`}
		>
			<div className="container mx-auto h-full flex items-center justify-between">
				{/* logo */}
				<Link href="./">
					{/* <Image priority src={Logo} alt="" /> */}
					<h2 className="text-green-500 text-xl">SabiVoter</h2>
				</Link>
				{/* nav */}
				<div className="hidden lg:block">
					<Nav />
				</div>
				{/* nav mobile*/}
				<div className="lg:hidden">
					<NavMobile />
				</div>
			</div>
		</header>
	);
};

export default Header;
