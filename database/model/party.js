import { Schema, models, model } from 'mongoose';

const partySchema = new Schema({
	party: {
		type: String,
		unique: true,
		require: true,
	},
	info: String,
	motto: String,
	image: {
		public_id: String,
		url: String,
	},
});

const Party = models.party || model('party', partySchema);

export default Party;
