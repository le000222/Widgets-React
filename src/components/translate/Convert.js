import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ lang, text }) => {
	const [translated, setTranslated] = useState("");
	const [debouncedText, setDebouncedText] = useState(text);

	useEffect(() => {
		const timeId = setTimeout(() => {
			setDebouncedText(text);
		}, 500);

		return () => {
			clearTimeout(timeId);
		};
	}, [text]);

	useEffect(() => {
		/**** NOT WORKING ****/
		const doTranslation = async () => {
			const { data } = await axios.post("/api/wikisearch", {
				q: debouncedText,
				target: lang.value,
			});

			setTranslated(data.data.translations[0].translatedText);
		};

		doTranslation();
	}, [lang, debouncedText]);

	return (
		<div>
			<h1 className="ui header">{translated}</h1>
		</div>
	);
};

export default Convert;
