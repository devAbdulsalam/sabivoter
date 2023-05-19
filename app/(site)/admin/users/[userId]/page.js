import { notFound } from 'next/navigation';
import { getData } from '@/utils/AxiosApis';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/public/assets/avatar.png';
const page = async ({ params }) => {
	const data = await getData(`users/${params.userId}`);
	if (!data) return notFound();
	// const { _id, name, nin, email, role, eligible } = data;
	return (
		<div className="bg-primary w-full h-full">
			<section className="py-4 sm:py-7 bg-blue-100">
				<div className="container max-w-screen-xl mx-auto px-4">
					<h1 className="text-bold text-2xl">Admin Dashboard</h1>
				</div>
			</section>
			<div className="w-full mx-auto h-full overflow-y py-4 px-4 items-center my-2 text-green-500 bg-white">
				<div className="py-4 px-2 text-lg w-full bg-gray-100 shadow-md rounded-md p-1 max-w-xl mx-auto">
					<div className="flex justify-center p-2">
						<Image src={data?.image?.url || Hero} width={60} height={60} />
					</div>
					<p class="text-xl">{data.nin}</p>
					<p class="text-xl">{data.role}</p>
					<p class="text-xl">{data.eligible?.length || 0}</p>
					<h2 className="text-xl font-semibold capitalize text-center text-green-600 py-4">
						{data.email}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default page;
