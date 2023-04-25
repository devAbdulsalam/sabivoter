/** User Controller */
import Elections from '../model/election';

// get : http://localhost:3000/api/elections
export async function getElections(req, res) {
	try {
		const elections = await Elections.find({}).sort({ createdAt: -1 });
		if (!elections)
			return res.status(404).json({ error: 'Elections not Found' });
		res.status(200).json(elections);
	} catch (error) {
		res.status(404).json({ error: 'Error While Fetching Elections... !!' });
	}
}

// get : http://localhost:3000/api/elections/1
export async function getElection(req, res) {
	const { electionId } = req.query;
	try {
		const election = await Elections.findOne({ _id: electionId });
		if (!election) return res.status(404).json({ error: 'Election not Found' });
		res.status(200).json(election);
	} catch (error) {
		res.status(404).json({ error: 'Error While Fetching Election...!!' });
	}
}

// post : http://localhost:3000/api/elections
export async function postElection(req, res) {
	const { electionName, details, beginAt, endAt, image } = req.body;
	try {
		if (!electionName || !beginAt || !endAt) {
			return res.status(404).json({ error: 'All fields are Required!' });
		}
		const election = await Elections.create({
			electionName,
			beginAt,
			endAt,
			details,
			image,
		});
		if (!election) {
			res.status(404).json({ error: 'Error Creating Election' });
		}
		res.status(200).json({ election, msg: 'Election created successfully' });
	} catch (error) {
		res.status(404).json({ error: 'Error While Creating Election' });
	}
}

// put : http://localhost:3000/api/elections/electionId
export async function putElection(req, res) {
	const { electionId } = req.query;
	let formData = req.body;
	try {
		if (!electionId || !formData) {
			return res.status(404).json({ error: 'All fields are Required!' });
		}
		if (electionId || formData) {
			let election = await Elections.findOneAndUpdate(
				{ _id: electionId },
				formData
			);
			if (!election) {
				res.status(404).json({ error: 'Error While Updated Election' });
			}
			res.status(200).json({ election, msg: 'Election Updated successfully' });
		}
	} catch (error) {
		res.status(404).json({ error: 'Error Updating Election' });
	}
}

// delete : http://localhost:3000/api/elections/1
export async function deleteElection(req, res) {
	const { electionId } = req.query;
	try {
		if (!electionId) {
			return res.status(404).json({ error: 'Invalid Election!' });
		}
		const election = await Elections.findByIdAndDelete({ _id: electionId });
		if (!election) {
			res.status(404).json({ error: 'Error While Deleting Election' });
		}
		res.status(200).json({ election, msg: 'Election deleted successfully' });
	} catch (error) {
		res.status(404).json({ error: 'Error Deleting Election' });
	}
}
