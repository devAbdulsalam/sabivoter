'use client';
import { useEffect } from 'react';
import Hero from './../components/Landing/Hero';
import About from './../components/Landing/About';
import Services from './../components/Landing/Services';
import BackTopBtn from './../components/Landing/BackTopBtn';
import Contact from './../components/Landing/Contact';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Home() {
	const { data: session } = useSession();
	useEffect(() => {
		if (session?.user) {
			redirect('/dashboard');
		}
	}, [redirect, session]);

	return (
		<>
			<Hero />
			<About />
			<Services />
			<BackTopBtn />
			<Contact />
		</>
	);
}
