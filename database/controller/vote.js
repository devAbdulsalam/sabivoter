import Election from '../model/election';
import Candidate from '../model/candidate';
import User from '../model/user';
/** Vote Controller */

// get : http://localhost:3000/api/Votes
export async function getVotes(req, res) {
	const { election } = req.body;
	try {
		const Votes = await Election.find({ _id: election }, { votes: 1 }).sort({
			createdAt: -1,
		});
		if (!Votes) {
			res.status(404).json({ error: 'Votes not Available' });
			return;
		}
		res.status(200).json(Votes);
	} catch (error) {
		res.status(404).json({ error: 'Error While Fetching Votes..!' });
	}
}

// get : http://localhost:3000/api/Votes/1
export async function getVote(req, res) {
	try {
		const { VoteId } = req.query;

		if (VoteId) {
			const Vote = await Election.find({ VoteId });
			res.status(200).json(Vote);
		}
		res.status(404).json({ error: 'Vote not Selected...!' });
	} catch (error) {
		res.status(404).json({ error: 'Cannot get the Vote...!' });
	}
}

// post : http://localhost:3000/api//Votes
export async function vote(req, res) {
	const { voter, election, candidate } = req.body;
	try {
		if (!voter || !election || !candidate) {
			res.status(404).json({ error: 'invalid Vote credentials' });
			return;
		}
		if (voter && election && candidate) {
			const candidateExist = await Candidate.findOne({ _id: candidate });
			const electionExist = await Election.findOne({ _id: election });
			const userExist = await User.findOne({ _id: voter });

			if (!candidateExist || !electionExist || !userExist) {
				res.status(404).json({ error: 'Invalid vote credentials !!' });
				return;
            }
            const voted = await User.findByIdAndUpdate(
							{ _id: voter },
							{ $push: { voted: {election } } },
							{ new: true }
						);
			if (voted) {
                res.status(404).json({ error: 'User already voted !!' });
                return
			}
			// const { VoteId } = req.query;

			// if (VoteId && formData) {
			const Vote = await Election.findOneAndUpdate(
				{ _id: election },
				{ $push: { votes: { voter, candidate } } },
				{ new: true }
			);
			if (!Vote) {
				res.status(404).json({ error: 'Error Occur While Voting!' });
			}
			res.status(200).json({ Vote, message: 'Voted successfully' });
		}
	} catch (error) {
		res.status(404).json({ error: 'Error Occur While Voting!!' });
	}
}

// delete : http://localhost:3000/api/Votes/1
export async function deleteVote(req, res) {
	try {
		const { Voter } = req.query;

		if (Voter) {
			const Vote = await Election.findByIdAndDelete(Voter);
			return res
				.status(200)
				.json({ Vote, msg: 'Vote Delected Succesfully..!' });
		}

		res.status(404).json({ error: 'Vote Not Selected...!' });
	} catch (error) {
		res.status(404).json({ error: 'Error While Deleting the Vote...!' });
	}
}
