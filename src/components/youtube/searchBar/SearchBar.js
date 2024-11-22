import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState("");

	const onSubmit = event => {
		event.preventDefault();

		onFormSubmit(term);
	};

	return (
		<div className="ui segment search-bar">
			<Link to="/" className="icon-container">
				<FaYoutube className="icon-youtube" />
				Youtube Clone
			</Link>
			<form onSubmit={onSubmit}>
				<div className="ui search">
					<div className="ui icon input">
						<input
							className="prompt"
							type="text"
							placeholder="Common passwords..."
							value={term}
							onChange={event => setTerm(event.target.value)}
						/>
						<i className="search icon"></i>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
