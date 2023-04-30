import Sidebar from '@/components/layouts/Sidebar';

export default function DashboardLayout({ children }) {
	return (
		<>
			<section className="flex flex-col md:flex-row ">
				<Sidebar />
				<main className="w-full">
					<section className="py-4 sm:py-7 bg-blue-100">
						<div className="container max-w-screen-xl mx-auto px-4">
							<h1 className="text-bold text-2xl">User Dashboard</h1>
						</div>
					</section>
					<article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
						{children}
					</article>
				</main>
			</section>
		</>
	);
}
