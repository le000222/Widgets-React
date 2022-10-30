import React, { useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import YoutubeApi from './api/YoutubeApi';

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVid, setSelectedVid] = useState('');

  const onFormSubmit = async (term, numVid) => {
    const data = await YoutubeApi.get('/search', {
      params: {
        q: term,
        maxResults: numVid,
      },
    });

    setVideos(data.data.items);
    setSelectedVid(data.data.items[0]);
  };

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onFormSubmit} />
      <div className='ui grid'>
        <div className='eleven wide column'>
          <VideoDetail initalPage={onFormSubmit} selectedVid={selectedVid} />
        </div>
        <div className='five wide column'>
          <VideoList
            videos={videos}
            selectedVid={selectedVid}
            setSelectedVid={setSelectedVid}
          />
        </div>
      </div>
    </div>
  );
};

export default Youtube;
