import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, selectedVid, setSelectedVid }) => {
  if (video === selectedVid) {
    return null;
  }
  return (
    <div className='video-item item' onClick={() => setSelectedVid(video)}>
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
