import Election from '../model/election';
import Candidate from '../model/candidate';
import User from '../model/user';
// import connectMDB from '@/database/connMDB';
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

// post : http://localhost:3000/api/vote
// export async function vote(req, res) {
// 	const { voter, election, candidate } = req.body;
// 	try {
// 		if (!voter || !election || !candidate) {
// 			return res.status(404).json({ error: 'invalid Vote credentials' });
// 		}

// 		const candidateExist = await Candidate.find({ _id: candidate });
// 		const electionExist = await Election.find({ _id: election });
// 		const userExist = await User.find({ _id: voter });

// 		if (!candidateExist || !electionExist || !userExist) {
// 			return res.status(404).json({ error: 'Invalid vote credentials !!' });
// 		}
// 		const vote = await Election.findOneAndUpdate(
// 			{ _id: election },
// 			{ $push: { votes: { voter, candidate } } },
// 			{ new: true }
// 		);
// 		if (!vote) {
// 			res.status(404).json({ error: 'Error Occur While Voting!' });
// 		}
// 		res.status(200).json({ vote, message: 'Voted successfully' });
// 	} catch (error) {
// 		res.status(404).json({ error: 'Error Occur While Voting!!' });
// 	}
// }
export async function vote(req, res) {
	const { voter, election, candidate } = req.body;
	try {
		if (!voter || !election || !candidate) {
			return res.status(404).json({ error: 'Invalid vote credentials' });
		}

		const [candidateExist, electionExist, userExist] = await Promise.all([
			Candidate.findById(candidate),
			Election.findById(election),
			User.findById(voter),
		]);

		if (!candidateExist || !electionExist || !userExist) {
			return res.status(404).json({ error: 'Invalid vote credentials' });
		}

		const hasVoted = await Election.exists({
			_id: election,
			'votes.voter': voter,
		});
		const hasVote = await User.exists({
			_id: voter,
			'eligible.electionId': election,
		});

		if (hasVoted || hasVote) {
			return res
				.status(409)
				.json({ error: 'User has already voted in this election' });
		}

		const vote = await Election.findByIdAndUpdate(
			election,
			{ $push: { votes: { voter, candidate } } },
			{ new: true }
		);
		const voted = await User.findByIdAndUpdate(
			{ _id: voter },
			{
				$push: {
					eligible: {
						election: electionExist.electionName,
						electionId: election,
						voted: true,
						candidate,
					},
				},
			},
			{ new: true }
		);

		if (!vote || !voted) {
			return res.status(404).json({ error: 'Error occurred while voting' });
		}

		return res.status(200).json({ vote, voted, message: 'Voted successfully' });
	} catch (error) {
		return res.status(500).json({ error: 'Error occurred while voting' });
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
