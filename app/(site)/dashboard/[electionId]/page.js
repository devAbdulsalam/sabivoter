import Image from 'next/image';
import Link from 'next/link';
import avatar from '@/public/assets/avatar.png';
import { notFound } from 'next/navigation';
import { getData } from '@/utils/AxiosApis';
import BreadCrumbs from '@/components/ui/BreadCrumbs';

const page = async ({ params }) => {
	let election = await getData(`elections/${params.electionId}`);
	const breadCrumbs = [
		{ name: 'Home', url: '/' },
		{
			name: `${election?.electionName?.substring(0, 100)} ...`,
			url: `/elections/${params.electionId}`,
		},
	];
	if (!election) return notFound();

	return (
		<section className="w-full">
			<BreadCrumbs breadCrumbs={breadCrumbs} />
			<div className="py-10 px-10">
				<h2 className="text-center text-title py-2 text-2xl text-green-500 font-semibold">
					{election.electionName || 'Election Name'}
				</h2>
				<div className="w-full flex gap-2 py-2">
					<div className="mx-2">
						<Image
							src={election.image || avatar}
							alt="election"
							width={120}
							height={120}
							className="rounded-md"
						/>
					</div>
					<div className="mx-2">
						<div className="p-2 rounded-md shadow-md">
							<p className="subtitle">
								{election.details ||
									'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam labore nisium illum cupiditate reiciendis a numquam'}
							</p>
							<p className="text-green-500 p-2">
								The Election will be held from:
								<span>{election.beginAt || '28, feb, 2021'}</span> to
								<span>{election.endAt || '20, feb, 2021'}</span>
							</p>
						</div>
						<div className="flex gap-4 space-x-2 mt-2">
							<Link
								href={`/dashboard/${params.electionId}/candidates`}
								className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all"
							>
								Candidate
							</Link>
							<Link
								href={`/dashboard/${params.electionId}/votes`}
								className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all"
							>
								View Election Result
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default page;
