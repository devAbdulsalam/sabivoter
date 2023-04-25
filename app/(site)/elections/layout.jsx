import Aside from '@/components/layouts/Aside';
const ElectionLayout = async ({ children }) => {
	return (
		<section className="flex h-[100%] w-full mt-10 py-10">
			<Aside />
			<main className="w-full">{children}</main>
		</section>
	);
};
export default ElectionLayout;
