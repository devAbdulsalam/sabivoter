import mongoose from 'mongoose';
const connectMDB = async () => {
	try {
		if (connection.readyState >= 1) {
			console.log('database Conneted');
			return;
		}
		const { connection } = await mongoose.connect(process.env.MDB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (error) {
		return Promise.reject(error);
	}
};

export default connectMDB;
