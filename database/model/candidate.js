import { Schema, models, model } from 'mongoose';

const candidateSchema = new Schema({
	name: String,
	party: String,
	profile: String,
	election: String,
	image: {
		public_id: String,
		url: String,
	},
});

const Candidate = models.candidate || model('candidate', candidateSchema);

export default Candidate;
