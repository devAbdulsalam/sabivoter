/** Candidate Controller */
import Candidate from "../model/candidate";

// get : http://localhost:3000/api/candidate
export async function getCandidates(req, res) {
	try {
		const candidate = await Candidate.find({}).sort({
			createdAt: -1,
		});
		if (!candidate) return res.status(404).json({ error: "Data not Found" });
		res.status(200).json(candidate);
	} catch (error) {
		res.status(404).json({ error: "Error While Fetching Data" });
	}
}

// get : http://localhost:3000/api/candidate/1
export async function getCandidate(req, res) {
	try {
		const { candidateId } = req.query;

		if (candidateId) {
			const candidate = await Candidate.findById(candidateId);
			res.status(200).json(candidate);
		}
		res.status(404).json({ error: "User not Selected...!" });
	} catch (error) {
		res.status(404).json({ error: "Cannot get the User...!" });
	}
}

// post : http://localhost:3000/api/candidates
export async function postCandidate(req, res) {
	const { name, party, election, profile, image } = req.body;
	try {
		if (!name || !party || !election) {
			return res.status(404).json({ error: "Form Data Not Provided...!" });
		}
		const candidate = await Candidate.create({
			name,
			party,
			profile,
			election,
			image,
		});
		if (candidate) {
			res
				.status(200)
				.json({ candidate, msg: "Candidate created successfully" });
		}

		return res.status(404).json({ error: "Error Creating candidate...!" });
	} catch (error) {
		return res.status(404).json({ error: "Error Creating candidate..!!" });
	}
}

// put : http://localhost:3000/api/candidate/1
export async function putCandidate(req, res) {
	try {
		const { candidateId } = req.query;
		const formData = req.body;

		if (userId && formData) {
			const candidate = await Candidate.findByIdAndUpdate(
				candidateId,
				formData
			);
			if (candidate) {
				candidate.name = req.body.name || candidate.name;
				candidate.profile = req.body.profile || candidate.profile;
				candidate.party = req.body.party || candidate.party;
			}
			const updated = await candidate.save();
			res
				.status(200)
				.json({ updated, message: "candidate updated successfully" });
		}
		res.status(404).json({ error: "User Not Selected...!" });
	} catch (error) {
		res.status(404).json({ error: "Error While Updating the Data...!" });
	}
}

// delete : http://localhost:3000/api/candidate/1
export async function deleteCandidate(req, res) {
	const { candidateId } = req.query;
	try {
		if (candidateId) {
			const candidate = await Candidate.findByIdAndDelete(candidateId);
			return res
				.status(200)
				.json({ candidate, message: "candidate deleted successfully" });
		}

		res.status(404).json({ error: "User Not Selected...!" });
	} catch (error) {
		res.status(404).json({ error: "Error While Deleting the User...!" });
	}
}
