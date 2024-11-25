import React from "react";
import { useNavigate } from "react-router-dom";
import VideoItem from "../videoItem/VideoItem";
import "./YoutubeHome.css";

const Youtube = ({ allVideos, setAllVideos, searchTerm }) => {
	const navigate = useNavigate();

	const handleVideoClick = videoId => {
		navigate(`/youtube?q=${searchTerm}&id=${videoId}`);
	};

	return (
		<div className="ui container">
			{setAllVideos && (
				<div>
					<div className="greeting">What would you like to watch today?</div>
					<div className="ui two column grid">
						{allVideos.map((video, index) => (
							<div className="column" key={index}>
								<VideoItem
									key={video.id.videoId}
									video={video}
									onVideoClick={handleVideoClick}
									contextName="initial-load"
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Youtube;
