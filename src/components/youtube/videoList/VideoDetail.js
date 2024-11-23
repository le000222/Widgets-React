import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NUMVIDS } from "../../../resources/constants";
import Comments from "../comment/Comments";
import YoutubeApi from "../../../api/YoutubeApi";
import VideoItem from "../videoItem/VideoItem";
import "./VideoDetail.css";

const VideoDetail = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const [videoId, setVideoId] = useState(queryParams.get("id"));
	const searchTerm = queryParams.get("q");
	const [selectedVid, setSelectedVid] = useState("");
	const [allVideos, setAllVideos] = useState([]);

	const videoDetailFetch = async () => {
		const videoDetails = await YoutubeApi.get("/videos", {
			params: {
				id: videoId,
				part: "snippet,statistics,contentDetails",
			},
		});

		console.log(videoDetails);
		setSelectedVid(videoDetails.data.items[0]);
	};

	const allVideosFetch = async () => {
		const searchResponse = await YoutubeApi.get("/search", {
			params: {
				q: searchTerm,
				type: "video",
				part: "snippet",
				maxResults: NUMVIDS,
			},
		});

		setAllVideos(searchResponse.data.items);
	};

	useEffect(() => {
		console.log("VIDEO ID: ", videoId);
		if (videoId) videoDetailFetch();
		allVideosFetch();
	}, [videoId]);

	return (
		<div className="ui container">
			<div className="ui grid">
				{selectedVid && (
					<React.Fragment>
						<div className="eleven wide column">
							<div className="ui embed">
								<iframe
									title={selectedVid.snippet.title}
									src={`https://www.youtube.com/embed/${selectedVid.id.videoId}`}
								/>
							</div>
							<div className="ui segment">
								<div className="ui header">
									<h4>{selectedVid.snippet.title}</h4>
								</div>
								<div className="ui header">
									<h4>
										{selectedVid.snippet.channelTitle}{" "}
										{selectedVid.statistics.viewCount > 1000000 ? (
											<i className="ui smaller icon check circle" />
										) : null}
									</h4>
								</div>
								<p>{selectedVid.snippet.description}</p>
							</div>
							<Comments selectedVid={selectedVid} />
						</div>
						<div className="five wide column">
							<div className="ui relaxed divided list">
								{allVideos.map((video, index) => (
									<VideoItem
										key={index}
										video={video}
										contextName="video-list"
										onVideoClick={setVideoId}
									/>
								))}
							</div>
						</div>
					</React.Fragment>
				)}
			</div>
		</div>
	);
};

export default VideoDetail;
