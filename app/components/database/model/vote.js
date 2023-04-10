Candidate;
import { Schema, models, model } from "mongoose";

const voteSchema = new Schema({
	election: String,
	votes: [{ election: String, date: Date.now()}],
});

const Vote = models.vote || model("vote", voteSchema);

export default Vote;
