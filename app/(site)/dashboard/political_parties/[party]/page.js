import Image from 'next/image';
import Link from 'next/link';
import avatar from '@/public/assets/avatar.png';
import { notFound } from 'next/navigation';
import { getData } from '@/utils/AxiosApis';
import BreadCrumbs from '@/components/ui/BreadCrumbs';

const page = async ({ params }) => {
	let party = await getData(`political_parties/${params.party}`);
	console.log(party.party);
	const breadCrumbs = [
		{ name: 'Home', url: '/' },
		{
			name: `political_parties`,
			url: `./political_parties`,
		},
		{
			name: `${party?.party?.substring(0, 100)} ...`,
			url: `/political_parties/${params.party}`,
		},
	];
	if (!party) return notFound();

	return (
		<section className="w-full">
			<BreadCrumbs breadCrumbs={breadCrumbs} />
			<div className="py-10 px-10">
				<h2 className="text-center text-title py-2 text-2xl text-green-500 font-semibold">
					{params.party || 'Party Name'}
				</h2>
				<div className="w-full flex gap-2 py-2">
					<p>{party.motto}</p>
					<p>{party.info}</p>
				</div>
			</div>
		</section>
	);
};

export default page;
