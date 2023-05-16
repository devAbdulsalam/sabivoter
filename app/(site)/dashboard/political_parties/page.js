import { getData } from '@/utils/AxiosApis';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Hero from '@/public/assets/avatar.png';
const election = async () => {
	let data = await getData('political_parties');
	if (!data) return notFound();
	return (
		<div className="bg-primary w-full h-full">
			<section className="py-4 sm:py-7 bg-blue-100">
				<div className="container max-w-screen-xl mx-auto px-4">
					<h1 className="text-bold text-2xl">Political parties</h1>
				</div>
			</section>
			<div className="w-full mx-auto h-full py-4 px-4 sm:py-7">
				<div className="grid lg:grid-cols-4 gap-8">
					{data?.map((item) => (
						<Link
							key={item._id}
							href={`/${item.party}`}
							className="py-4 px-2 text-lg w-full bg-gray-100 shadow-md rounded-md p-1"
						>
							<div className="flex justify-center p-2">
								<Image src={item?.image?.url || Hero} width={60} height={60} />
							</div>
							<h2 className="text-xl font-semibold capitalize text-center text-green-600 py-4">
								{item.party}
							</h2>
							<p class="">
								Motto: <span>{item.motto}</span>
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
export default election;
