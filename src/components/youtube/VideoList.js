import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, selectedVid, setSelectedVid }) => {
  const renderedList = videos.map((video) => {
    return (
      <div className='ui list'>
        <VideoItem
          video={video}
          selectedVid={selectedVid}
          setSelectedVid={setSelectedVid}
        />
      </div>
    );
  });
  return <div>{renderedList}</div>;
};

export default VideoList;
