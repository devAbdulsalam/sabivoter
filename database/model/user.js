import { Schema, models, model } from 'mongoose';

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
			default: 'user',
		},
		eligible: [
			{
				voted: {
					type: Boolean,
					default: false,
				},
				election: {
					type: String,
					required: [true, 'Election name is required'],
				},
				electionId: {
					type: String,
					required: [true, 'Election ID is required'],
				},
				date: { type: Date, default: Date.now().toString() },
			},
		],
		password: {
			type: String,
			required: [true, 'Please enter your password'],
			minLength: [6, 'Your password must be longer than 6 characters'],
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

const Users = models.user || model('user', userSchema);

export default Users;
