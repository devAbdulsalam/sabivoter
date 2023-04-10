import Hero from "./../components/Landing/Hero";
import About from "./../components/Landing/About";
import Services from "./../components/Landing/Services";
import BackTopBtn from "./../components/Landing/BackTopBtn";
import Contact from "./../components/Landing/Contact";

export default function Home() {
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
