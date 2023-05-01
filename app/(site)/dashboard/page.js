import { getData } from '@/utils/AxiosApis';
// import Election cards
import Election from './election';
import { notFound } from 'next/navigation';

const election = async () => {
	let data = await getData('elections');
	if (!data) return notFound();
	return (
		<div className="bg-primary w-full h-full">
			<section className="py-4 sm:py-7 bg-blue-100">
				<div className="container max-w-screen-xl mx-auto px-4">
					<h1 className="text-bold text-2xl">User Dashboard</h1>
				</div>
			</section>
			<div className="w-full mx-auto h-full py-4 px-4 sm:py-7">
				<h2 className="text-xl text-center text-green-600 py-4">Elections</h2>
				<div className="grid lg:grid-cols-4 gap-8">
					{data.map((item) => (
						<Election key={item._id} election={item} />
					))}
				</div>
			</div>
		</div>
	);
};
export default election;
