import Election from '../model/election';
import Candidate from '../model/candidate';
import User from '../model/user';
import mongoose from 'mongoose';
// import connectMDB from '@/database/connMDB';
/** Vote Controller */


// get : http://localhost:3000/api/allvotes
export async function getALLVotes(req, res) {
	try {
		const Votes = await Election.find({}, { electionName : 1, votes: 1 }).sort({
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
	try {
		const { voter, electionId, candidate } = req.body;

		if (!voter || !electionId || !candidate) {
			return res.status(400).json({ error: 'Invalid vote credentials!' });
		}

		const [candidateExist, electionExist, userExist] = await Promise.all([
			Candidate.findById(candidate),
			Election.findById(electionId),
			User.findById(voter),
		]);

		if (!candidateExist || !electionExist || !userExist) {
			return res.status(404).json({ error: 'Invalid vote credentials!' });
		}

		const hasVote = await Election.exists({
			_id: electionId,
			'votes.voter': voter,
		});
		const hasVoted = await User.exists({
			_id: voter,
			'eligible.electionId': electionId,
		});

		if (hasVote) {
			return res
				.status(409)
				.json({ error: 'User has already voted in this election' });
		}
		if (hasVoted) {
			return res
				.status(409)
				.json({ error: 'User has already voted in this election' });
		}

		const updatedElection = await Election.findByIdAndUpdate(
			{ _id : electionId },
			{ $push: { votes: {voter} } },
			{ new: true }
		);
		if (
			!mongoose.isValidObjectId(candidate) ||
			!mongoose.isValidObjectId(electionId) ||
			!mongoose.isValidObjectId(voter)
		) {
			return res.status(400).json({ error: 'Invalid vote credentials!' });
		}
		const updatedUser = await User.findByIdAndUpdate(
			{ _id: voter },
			{
				$push: {
					eligible: {
						election: electionExist.electionName,
						electionId: mongoose.isValidObjectId(electionId),
						voted: true,
					},
				},
			},
			{ new: true }
		);
		const updatedCandidate = await Candidate.findByIdAndUpdate(
			{ _id: candidate },
			{
				$push: {
					votes: {
						voter: mongoose.isValidObjectId(voter),
						date: Date.now().toString(),
					},
				},
			},
			{ new: true }
		);

		if (!updatedElection || !updatedUser || !updatedCandidate) {
			return res.status(500).json({ error: 'Error occurred while voting !' });
		}

		return res
			.status(200)
			.json({ updatedElection, updatedUser, message: 'Voted successfully' });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: 'Error occurred while voting !!' });
	}
}

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
	const { election } = req.body;
	try {
		const candidates = await Candidate.find(
			{ election },
			{ _id, party, votes }
		);
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
``;
