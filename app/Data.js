// navigation
export const navigation = [
	{
		name: "home",
		href: "home",
	},
	{
		name: "about",
		href: "about",
	},
	{
		name: "services",
		href: "services",
	},
	{
		name: "contact",
		href: "contact",
	},
];
// navigation
export const navLinks = [
	{
		name: "home",
		href: "/#home",
	},
	{
		name: "dashboard",
		href: "./dashboard",
	},
	{
		name: "new Candidate",
		href: "./admin/newcandidate",
	},
	{
		name: "new election",
		href: "./admin/newelection",
	},
	{
		name: "count votes",
		href: "./admin/countvote",
	},
];

//  icons
import {
	FiYoutube,
	FiInstagram,
	FiGithub,
	FiDribbble,
	FiLayout,
	FiSettings,
	FiPenTool,
	FiTag,
	FiMail,
	FiMapPin,
} from "react-icons/fi";

// social
export const social = [
	{
		icon: <FiYoutube />,
		href: "",
	},
	{
		icon: <FiInstagram />,
		href: "",
	},
	{
		icon: <FiGithub />,
		href: "https://github.com/devAbdulsalam",
	},
	{
		icon: <FiDribbble />,
		href: "",
	},
];

// projects images
import Project1 from "../public/assets/projects/p1.webp";
import Project2 from "../public/assets/projects/p2.webp";
import Project3 from "../public/assets/projects/p3.webp";
import Project4 from "../public/assets/projects/p4.webp";

// projects
export const projectsData = [
	{
		id: "1",
		image: Project1,
		name: "project name 1",
		category: "UI/UX design",
	},
	{
		id: "2",
		image: Project2,
		name: "project name 2",
		category: "web development",
	},
	{
		id: "3",
		image: Project3,
		name: "project name 3",
		category: "UI/UX design",
	},
	{
		id: "4",
		image: Project4,
		name: "project name 4",
		category: "branding",
	},
];

// services
export const services = [
	{
		icon: <FiLayout />,
		name: "Web Design",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
	},
	{
		icon: <FiSettings />,
		name: "Web Development",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
	},
	{
		icon: <FiPenTool />,
		name: "Branding",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
	},
	{
		icon: <FiTag />,
		name: "SEO",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
	},
];
// candidates
export const candidates = [
	{
		id: "1",
		name: "Abdullahi Sunday",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
	},
	{
		id: "2",
		name: "Adekunle Bulus",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
	},
	{
		id: "3",
		name: "Adeize Muzamile",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
	},
	{
		id: "4",
		name: "Fatima Chibozor",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
	},
];

// contact
export const contact = [
	{
		icon: <FiMail />,
		title: "Have a question?",
		subtitle: "I am here to help you.",
		description: "Email me at hello@youremail.com",
		contact: "https://github.com/devAbdulsalam",
	},
	{
		icon: <FiMapPin />,
		title: "Abdulsalam",
		subtitle: "MERN FullStack developer, Frontend Developer",
		description: "Serving clients worldwide",
		contact: "https://github.com/devAbdulsalam",
	},
];
