import Link from 'next/link';
const Tr = ({ obj, idx }) => {
	const {election, voted } = obj;
	return (
		<tr className="py-10 even:bg-slate-50 odd:bg-gray-100 hover:bg-gray-200 font-medium">
			<td className="px-2 py-2 md:px-4 md:py-4">{idx + 1}</td>
			<td className="px-2 py-2 md:px-4 md:py-4 whitespace-nowrap">
				{election || 'name'}
			</td>
			<td className="px-2 py-2 md:px-4 md:py-4">
				<Link href={election}>{election || 'ABC'}</Link>
			</td>
			<td className="px-2 py-2 md:px-4 md:py-4">250,000</td>
			<td className="px-2 py-2 md:px-4 md:py-4">{election || '1,000,000'}</td>
			<td className="px-2 py-2 md:px-4 md:py-4">{voted || 'not Voted'}%</td>
		</tr>
	);
};

export default Tr;
