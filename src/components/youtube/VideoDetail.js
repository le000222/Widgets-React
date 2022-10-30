import React from 'react';

const VideoDetail = ({ selectedVid, onFormSubmit }) => {
  if (!selectedVid) {
    return (
      <div>
        <div>What would you like to watch today?</div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVid.id.videoId}`;

  return (
    <div>
      <div className='ui embed'>
        <iframe title={selectedVid.snippet.title} src={videoSrc} />
      </div>
      <div className='ui segment'>
        <div className='ui header'>
          <h4>{selectedVid.snippet.title}</h4>
        </div>
        <p>{selectedVid.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
