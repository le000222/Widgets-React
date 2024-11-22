import React from "react";
import VideoItem from "../videoItem/VideoItem";
import "./InitialLoad.css";

export const InitialLoad = ({ videos, onVideoClick }) => {
	console.log(videos);
	return (
		<>
			<div className="greeting">What would you like to watch today?</div>
			<div className="ui two column grid">
				{videos.map((video, index) => (
					<div className="column" key={index}>
						<VideoItem
							key={video.id.videoId}
							video={video}
							onClick={() => onVideoClick(video.id.videoId)}
							contextName="initial-load"
							// selectedVid={selectedVid}
							// setSelectedVid={setSelectedVid}
						/>
					</div>
				))}
			</div>
		</>
	);
};
