import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar/SearchBar";
import VideoDetail from "./videoList/VideoDetail";
import YoutubeApi from "../../api/YoutubeApi";
import { InitialLoad } from "./initialPage/InitialLoad";
import { useNavigate } from "react-router-dom";

const Youtube = () => {
	const NUMVIDS = 5;
	const navigate = useNavigate();
	const [videos, setVideos] = useState([]);
	const [selectedVid, setSelectedVid] = useState("");

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

		setVideos(searchResponse.data.items)
		// const videoItems = searchResponse.data.items;
		// const videoIds = videoItems.map(item => item.id.videoId).join(",");

		// const addedDetails = await YoutubeApi.get("/videos", {
		// 	params: {
		// 		id: videoIds,
		// 		part: "snippet,statistics,contentDetails",
		// 	},
		// });

		// const detailedVideos = addedDetails.data.items.map((video, index) => ({
		// 	...videoItems[index],
		// 	...video,
		// }));

		// setVideos(detailedVideos);
		// setSelectedVid(data.data.items[0]);
	};
	const handleVideoClick = videoId => {
		setSelectedVid(videoId);
		navigate(`/youtube?id=${videoId}`);
	};

	return (
		<div className="ui container">
			<SearchBar onFormSubmit={onFormSubmit} />
			{videos ? (
				<InitialLoad
					// selectedVid={selectedVid}
					videos={videos}
					onVideoClick={handleVideoClick}
				/>
			) : null}
			{/* {selectedVid === "" ? (
				<div>
					<InitialLoad
						selectedVid={selectedVid}
						videos={videos}
						setSelectedVid={setSelectedVid}
					/>
				</div>
			) : (
				<VideoDetail
					selectedVid={selectedVid}
					videos={videos}
					setSelectedVid={setSelectedVid}
				/>
			)} */}
		</div>
	);
};

export default Youtube;
