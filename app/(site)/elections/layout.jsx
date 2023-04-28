import Sidebar from '@/components/layouts/Sidebar';
const ElectionLayout = async ({ children }) => {
	return (
		<section className="flex h-[100%] w-full">
			<Sidebar />
			<main className="w-full">{children}</main>
		</section>
	);
};
export default ElectionLayout;
