import React from "react";
import VideoItem from "../videoItem/VideoItem";

const VideoList = ({ videos, selectedVid, setSelectedVid }) => {
	const renderedList = videos.map(video => {
		return (
			<VideoItem
				contextName="video-list"
				key={video.id.videoId}
				video={video}
				selectedVid={selectedVid}
				setSelectedVid={setSelectedVid}
			/>
		);
	});
	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
