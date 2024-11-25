import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Comments from "../comment/Comments";
import VideoItem from "../videoItem/VideoItem";
import "./VideoDetail.css";

const VideoDetail = ({ allVideos }) => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const [videoId, setVideoId] = useState(queryParams.get("id"));
	const [selectedVid, setSelectedVid] = useState(null);
	const [videos, setVideos] = useState(allVideos);

	const videoDetailFetch = () => {
		setSelectedVid(allVideos.find(video => video.id.videoId === videoId));
		setVideos(allVideos.filter(video => video.id.videoId !== videoId));
	};

	useEffect(() => {
		if (videoId) videoDetailFetch();
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
								{videos.map((video, index) => (
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
