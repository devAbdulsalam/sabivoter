/** Candidate Controller */
import Party from '../model/party';
import { uploads } from '@/utils/cloudinary';
import fs from 'fs';
import connectMDB from '@/database/connMDB';

// get : http://localhost:3000/api/political_parties
export async function getParties(req, res) {
	try {
		const party = await Party.find({}).sort({
			createdAt: -1,
		});
		if (!party) return res.status(404).json({ error: 'No Party Found' });
		res.status(200).json(party);
	} catch (error) {
		res.status(404).json({ error: 'Error While Fetching Data' });
	}
}
// get : http://localhost:3000/api/api/political_parties/party
export async function getParty(req, res) {
	const { party } = req.query;
	try {
		const pparty = await Party.find({ party });
		if (!pparty) return res.status(404).json({ error: 'Party Not Found' });
		res.status(200).json(pparty);
	} catch (error) {
		res.status(404).json({ error: 'Error While Fetching Data' });
	}
}

// post : http://localhost:3000/api/addcandidates
export async function addParty(req, res) {
	connectMDB().catch(() =>
		res.status(405).json({ error: 'Error in the Connection' })
	);
	const { party, motto, info } = req.body;
	let image;

	if (!party) {
		return res.status(404).json({ error: 'Party must be provided...!' });
	}
	try {
		if (req.files.length > 0) {
			const file = req.files[0];
			const { path } = file;
			const canImage = await uploads(path, 'sabivoters/pparties');
			if (!canImage) {
				return res.status(404).json({ error: 'Unable to upload Image' });
			}
			fs.unlinkSync(path);
			image = canImage;
		}
		const partyexist = await Party.findOne({ party });
		if (partyexist) {
			return res.status(404).json({ error: 'Political Party already exist!!' });
		}
		const pparty = await Party.create({
			party,
			info,
			motto,
			image,
		});
		if (!party) {
			return res.status(404).json({ error: 'Error Creating party..!' });
		}
		return res.status(200).json({ pparty, msg: 'party created successfully' });
	} catch (error) {
		return res.status(404).json({ error: 'Error Creating party...!' });
	}
}

export async function postParty(req, res) {
	const { party, info, motto } = req.body;
	try {
		if (!party) {
			return res.status(404).json({ error: 'All fields are Required!' });
		}
		const parties = await Party.create({
			party,
			info,
			motto,
		});
		if (!party) {
			res.status(404).json({ error: 'Error Creating party' });
		}
		res.status(200).json({ parties, msg: 'Party created successfully' });
	} catch (error) {
		res.status(404).json({ error: 'Error While Creating Party' });
	}
}

export async function putParty(req, res) {
	const { party, info, motto } = req.body;
	try {
		if (!party) {
			return res.status(404).json({ error: 'All fields are Required!' });
		}
		const parties = await Party.create({
			party,
			info,
			motto,
		});
		if (!party) {
			res.status(404).json({ error: 'Error Creating party' });
		}
		res.status(200).json({ parties, msg: 'Party created successfully' });
	} catch (error) {
		res.status(404).json({ error: 'Error While Creating Party' });
	}
}
