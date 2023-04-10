import { getData } from "../../../utils/AxiosApis";
// import Election cards
import Election from "./election";

const election = async () => {
	let data = await getData("elections");
	return (
		<div className="section bg-primary py-10 px-4 w-full">
			<div className="container mx-auto h-full py-4">
				<h2 className="section-title text-center text-green-600">Elections</h2>
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
