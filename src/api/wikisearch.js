import axios from "axios";

/**** NOT WORKING ****/
export default async function handler(req, res) {
	const { q, target } = req.body; // Get text and target language from the request body

	try {
		const response = await axios.post(
			"https://translation.googleapis.com/language/translate/v2",
			{},
			{
				params: {
					q,
					target,
					key: process.env.GOOGLE_API_KEY,
				},
			}
		);

		// Return the translated result to the frontend
		res.status(200).json(response.data);
	} catch (error) {
		console.error("Error with translation:", error);
		res
			.status(500)
			.json({ error: "Failed to translate", details: error.message });
	}
}
