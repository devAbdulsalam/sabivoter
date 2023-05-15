import { getData } from '@/utils/AxiosApis';
// import Election cards
import Election from './election';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Hero from '@/public/assets/avatar.png';
const election = async () => {
	let data = await getData('generalInfo');
	if (!data) return notFound();
	return (
		<div className="bg-primary w-full h-full">
			<section className="py-4 sm:py-7 bg-blue-100">
				<div className="container max-w-screen-xl mx-auto px-4">
					<h1 className="text-bold text-2xl">User Dashboard</h1>
				</div>
			</section>
			<div className="w-full mx-auto h-full py-4 px-4 sm:py-7">
				<div>
					<div className="grid lg:grid-cols-4 gap-8">
						<Link
							href={`/dashboard/elections`}
							className="py-4 px-2 text-lg w-full bg-gray-100 shadow-md rounded-md p-1"
						>
							<div className="flex justify-center p-2">
								<Image src={Hero} width={60} height={60} />
							</div>
							<h2 className="text-xl font-semibold capitalize text-center text-green-600 py-4">
								{data.elections.length} + Elections
							</h2>
						</Link>
						<Link
							href={`/dashboard/political_parties`}
							className="py-4 px-2 text-lg w-full bg-gray-100 shadow-md rounded-md p-1"
						>
							<div className="flex justify-center p-2">
								<Image src={Hero} width={60} height={60} />
							</div>
							<h2 className="text-xl font-semibold capitalize text-center text-green-600 py-4">
								{data.parties.length} + political parties
							</h2>
						</Link>
						<div className="py-4 px-2 text-lg w-full bg-gray-100 shadow-md rounded-md p-1">
							<div className="flex justify-center p-2">
								<Image src={Hero} width={60} height={60} />
							</div>
							<h2 className="text-xl font-semibold capitalize text-center text-green-600 py-4">
								{data.candidates.length} + Candidates
							</h2>
						</div>
						<div className="py-4 px-2 text-lg w-full bg-gray-100 shadow-md rounded-md p-1">
							<div className="flex justify-center p-2">
								<Image src={Hero} width={60} height={60} />
							</div>
							<h2 className="text-xl font-semibold capitalize text-center text-green-600 py-4">
								{data.users.length} + Voters
							</h2>
						</div>
					</div>
				</div>
				<div className="mt-10">
					<h2 className="text-xl text-center text-green-600 py-4">Elections</h2>
					<div className="grid lg:grid-cols-4 gap-8">
						{data?.elections?.map((item) => (
							<Election key={item._id} election={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default election;
