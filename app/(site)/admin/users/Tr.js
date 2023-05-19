import Link from 'next/link';
const Tr = ({ obj, idx }) => {
	const { _id, name, nin, email, role, eligible } = obj;
	const voted = eligible.filter((item) => item.voted === true);
	// console.log(voted)
	return (
		<tr className="py-10 even:bg-slate-50 odd:bg-gray-100 hover:bg-gray-200 font-medium">
			<td className="px-2 py-2 md:px-4 md:py-4">{idx + 1}</td>
			<td className="px-2 py-2 md:px-4 md:py-4 whitespace-nowrap capitalize text-left">
				<Link href={`/users/${_id || name}`}>{name}</Link>
			</td>
			<td className="px-2 py-2 md:px-4 md:py-4 text-left">
				{email || 'abc@gmail.com'}
			</td>
			<td className="px-2 py-2 md:px-4 md:py-4">{role}</td>
			<td className="px-2 py-2 md:px-4 md:py-4">{nin}</td>
			<td className="px-2 py-2 md:px-4 md:py-4">{eligible.length || 0}</td>
			<td className="px-2 py-2 md:px-4 md:py-4">{voted.length || 0}</td>
		</tr>
	);
};

export default Tr;
