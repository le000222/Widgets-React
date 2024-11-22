import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import "./WikiSearch.css";

const Search = () => {
	const [term, setTerm] = useState("programming");
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [results, setResults] = useState([]);

	//run any time text changes
	useEffect(() => {
		// whenever we call setTimeout() func, it always return a unique int for identifier
		const timerId = setTimeout(() => {
			setDebouncedTerm(term);
		}, 1000);

		// we can use that identifier to cancel the timeout
		return () => {
			clearTimeout(timerId);
		};
	}, [term]);

	// search, request, update results
	// useEffect launched whenever debounced text shows up on the screen
	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
				params: {
					action: "query",
					list: "search",
					origin: "*",
					format: "json",
					srsearch: debouncedTerm,
				},
			});

			setResults(data.query.search);
		};
		search();
	}, [debouncedTerm]);

	const renderedResults = results.map(result => {
		return (
			<div key={result.pageid} className="item">
				<div className="content">
					<a
						className="header"
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
					>
						{result.title}
					</a>
					<div className="description">
						<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className="ui container">
			<div className="ui form">
				<div className="field wikisearch">
					<label>Enter Search Term</label>
					<input
						className="input"
						value={term}
						onChange={e => {
							setTerm(e.target.value);
						}}
					/>
				</div>
				<div className="ui celled list wikisearch">{renderedResults}</div>
			</div>
		</div>
	);
};

export default Search;
