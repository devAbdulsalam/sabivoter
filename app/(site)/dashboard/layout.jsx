import Sidebar from '../../components/layouts/Sidebar';

export default function DashboardLayout({ children }) {
	return (
		<>
			<section className="flex flex-col md:flex-row ">
				<Sidebar />
				<main className="w-full bg-white">{children}</main>
			</section>
		</>
	);
}
