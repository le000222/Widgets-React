import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, selectedVid, setSelectedVid }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        selectedVid={selectedVid}
        setSelectedVid={setSelectedVid}
      />
    );
  });
  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default VideoList;
