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

export async function vote(req, res) {
	const { voter, election, electionId, candidate } = req.body;
	try {
		if (!voter || !election || !candidate) {
			return res.status(404).json({ error: 'Invalid vote credentials !' });
		}

		const [candidateExist, electionExist, userExist] = await Promise.all([
			Candidate.findById(candidate),
			Election.findById(electionId),
			User.findById(voter),
		]);

		if (!candidateExist || !electionExist || !userExist) {
			return res.status(404).json({ error: 'Invalid vote credentials !!' });
		}

		const hasVoted = await Election.exists({
			_id: election,
			'votes.voter': voter,
		});
		const hasVote = await User.exists({
			_id: voter,
			'eligible.electionId': electionId,
		});

		if (hasVoted || hasVote) {
			return res
				.status(409)
				.json({ error: 'User has already voted in this election' });
		}

		const vote = await Election.findByIdAndUpdate(
			election,
			{ $push: { votes: voter } },
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
					},
				},
			},
			{ new: true }
		);
		const canVote = await Candidate.findByIdAndUpdate(
			{ _id: candidate },
			{
				$push: {
					votes: {
						voter,
						date: Date.now().toString(),
					},
				},
			},
			{ new: true }
		);

		if (!vote || !voted || canVote) {
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

export const countVote = async (req, res) => {
		const {election} = req.body	
	try {
		const candidates = await Candidate.find({ election }, { _id, party, votes });
		const voteCounts = {};

		for (const candidate of candidates) {
			const candidateId = candidate._id;
			const voteCount = await Election.countDocuments({ candidateId });
			voteCounts[candidateId] = {
				voteCount,
				partyName: candidate.partyName,
				image: candidate.image,
			};
		}

		return res.status(StatusCodes.OK).json(response({ data: voteCounts }));
	} catch (error) {
		console.log(console.error);
	}
};
``