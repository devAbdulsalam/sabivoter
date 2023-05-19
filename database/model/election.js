import { Schema, models, model } from 'mongoose';

const electionSchema = new Schema({
	electionName: { type: String, required: true },
	details: { type: String, required: false },
	image: { type: String, required: false },
	beginAt: { type: String, required: true },
	endAt: { type: String, required: true },
	votes: [
		{
			voter: String,
		},
	],
});

const Election = models.election || model('election', electionSchema);

export default Election;
