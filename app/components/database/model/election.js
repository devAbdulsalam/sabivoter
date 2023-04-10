import { Schema, models, model } from "mongoose";

const electionSchema = new Schema({
	electionName: String,
	details: String,
	image: String,
	beginAt: String,
	endAt: String,
});

const Election = models.election || model("election", electionSchema);

export default Election;
