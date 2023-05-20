
const Tr = ({ obj, idx }) => {
	const {electionName, votes } = obj;
	return (
		<tr className="py-10 even:bg-slate-50 odd:bg-gray-100 hover:bg-gray-200 font-medium">
			<td className="px-2 py-2 md:px-4 md:py-4">{idx + 1}</td>
			<td className="px-2 py-2 md:px-4 md:py-4 whitespace-nowrap">
				{electionName}
			</td>
			<td className="px-2 py-2 md:px-4 md:py-4">{votes.length}</td>
			<td className="px-2 py-2 md:px-4 md:py-4">{'1,000,000'}</td>
			<td className="px-2 py-2 md:px-4 md:py-4">
				{votes.length || 'not Voted'}%
			</td>
		</tr>
	);
};

export default Tr;
