import React from "react";
import VideoItem from "../videoItem/VideoItem";
import "./InitialLoad.css";

export const InitialLoad = ({ videos, onVideoClick }) => {
	return (
		<div>
			<div className="greeting">What would you like to watch today?</div>
			<div className="ui two column grid">
				{videos.map((video, index) => (
					<div className="column" key={index}>
						<VideoItem
							key={video.id.videoId}
							video={video}
							onVideoClick={onVideoClick}
							contextName="initial-load"
						/>
					</div>
				))}
			</div>
		</div>
	);
};
