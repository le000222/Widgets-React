import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar/SearchBar";
import YoutubeApi from "../../api/YoutubeApi";
import { InitialLoad } from "./initialPage/InitialLoad";
import { useNavigate } from "react-router-dom";
import { NUMVIDS } from "../../resources/constants";

const Youtube = () => {
	const navigate = useNavigate();
	const [videos, setVideos] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	//Initial load only
	useEffect(() => {
		onFormSubmit("dogs", NUMVIDS);
	}, []);

	const onFormSubmit = async term => {
		const searchResponse = await YoutubeApi.get("/search", {
			params: {
				q: term,
				type: "video",
				part: "snippet",
				maxResults: NUMVIDS,
			},
		});
		setSearchTerm(term);
		setVideos(searchResponse.data.items);
	};

	const handleVideoClick = videoId => {
		console.log("VIDEO ID: ", videoId);
		navigate(`/youtube?q=${searchTerm}&id=${videoId}`);
	};

	return (
		<div className="ui container">
			<SearchBar onFormSubmit={onFormSubmit} />
			{videos && (
				<InitialLoad videos={videos} onVideoClick={handleVideoClick} />
			)}
		</div>
	);
};

export default Youtube;
