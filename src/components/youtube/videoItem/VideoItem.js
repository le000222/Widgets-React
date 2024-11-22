import React from "react";
import { LuDot } from "react-icons/lu";
import "./VideoItem.css";

const VideoItem = ({ video, selectedVid, setSelectedVid, contextName }) => {
	if (video === selectedVid) {
		return null;
	}

	const viewCount = view => {
		if (view < 1000) return view + " views";
		else if (view >= 1000 && view < 1000000)
			return Math.floor(view / 1000, 1) + "K views";
		else if (view >= 1000000 && view < 1000000000)
			return Math.floor(view / 1000000, 1) + "M views";
		else if (view >= 1000000000)
			return Math.floor(view / 1000000000, 1) + "B views";
	};

	const duration = date => {
		const publishedDate = new Date(date);
		const today = new Date();
		const daysDifference = Math.floor(
			(today - publishedDate) / (1000 * 60 * 60 * 24)
		);
		if (daysDifference === 0) return "Today";
		else if (daysDifference < 30) return daysDifference + " days ago";
		else if (daysDifference < 365)
			return Math.floor(daysDifference / 30) + " months ago";
		else return Math.floor(daysDifference / 30 / 12) + " years ago";
	};

	return (
		<div
			className={`item video-item ${contextName}`}
			onClick={() => setSelectedVid(video)}
		>
			<img
				className={`ui image ${contextName}`}
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.description}
			/>
			<div className={`detail ${contextName}`}>
				<strong className="title">{video.snippet.title}</strong>
				{/* <div className="channel">
					{video.snippet.channelTitle} {"  "}
					<i className="ui smaller icon check circle" />
					<br />
					{viewCount(video.statistics.viewCount)}
					<LuDot />
					{duration(video.snippet.publishedAt.split("T")[0])}
				</div> */}
			</div>
		</div>
	);
};

export default VideoItem;
