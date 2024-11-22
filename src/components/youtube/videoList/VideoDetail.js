import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Comments from "../comment/Comments";
import VideoList from "./VideoList";
import "./VideoDetail.css";
import { useLocation } from "react-router-dom";

const VideoDetail = ({ videos }) => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const videoId = queryParams.get("id");

	// const videoSrc = `https://www.youtube.com/embed/${selectedVid.id.videoId}`;
	return (
		<div className="ui grid">
			Playing video: {videoId}
			{/* <div className="eleven wide column">
				<div className="ui embed">
					<iframe title={selectedVid.snippet.title} src={videoSrc} />
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
				<VideoList
					videos={videos}
					selectedVid={selectedVid}
					setSelectedVid={setSelectedVid}
				/> */}
			{/* </div> */}
		</div>
	);
};

export default VideoDetail;
