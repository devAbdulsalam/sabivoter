'use client';
import { useEffect } from 'react';
import Hero from '@/components/Landing/Hero';
import About from '@/components/Landing/About';
import Services from '@/components/Landing/Services';
import BackTopBtn from '@/components/Landing/BackTopBtn';
import Contact from '@/components/Landing/Contact';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Home() {
	const { data: session } = useSession();
	const router = useRouter();
	useEffect(() => {
		if (session?.user) {
			router.push('/dashboard');
		}
	}, [router, session]);

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
