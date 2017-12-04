import React from 'react';
import PropTypes from 'prop-types';

import VideoItem from './video-item';
const VideoList = props => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoItem 
        onVideoSelects={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func
};

export default VideoList;