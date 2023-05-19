import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/avatar.png';
const Tr = ({ obj, idx }) => {
	const { party, image } = obj;
	return (
		<tr className="py-10 even:bg-slate-50 odd:bg-gray-100 hover:bg-gray-200 font-medium">
			<td className="px-2 py-2 md:px-4 md:py-4">{idx + 1}</td>
			<td className="px-2 py-2 md:px-4 md:py-4 whitespace-nowrap">
				<Image src={image?.url || logo} alt={party} width={40} height={40} />
			</td>
			<td className="px-2 py-2 md:px-4 md:py-4 capitalize">
				<Link href={party}>{party || 'ABC'}</Link>
			</td>
			<td className="px-2 py-2 md:px-4 md:py-4">250,000</td>
			<td className="px-2 py-2 md:px-4 md:py-4">{'15'}</td>
			<td className="px-2 py-2 md:px-4 md:py-4">{'1,000,000'}</td>
		</tr>
	);
};

export default Tr;
