import { Schema, models, model } from "mongoose";

const userSchema = new Schema(
	{
		name: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			unique: true,
			require: true,
		},
		nin: {
			type: String,
			unique: true,
			require: true,
		},
		image: {
			public_id: {
				type: String,
				require: true,
			},
			url: {
				type: String,
				require: true,
			},
		},
		role: {
			type: String,
			default: "user",
		},
		eligible: [
			{
				election: String,
			},
		],
		voted: [
			{
				election: String,
				candidate: String,
				date: { type: Date, default: Date.now },
			},
		],
		password: {
			type: String,
			require: true,
		},
		state: {
			type: String,
		},
		country: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Users = models.user || model("user", userSchema);

export default Users;
