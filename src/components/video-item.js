import React from 'react';
import PropTypes from 'prop-types';

const VideoItem = ({video, onVideoSelects}) => {
  const imageUrl = video.snippet.thumbnails.default.url,
    title = video.snippet.title;
  return (
    <li onClick={()=>onVideoSelects(video)}className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object,
  onVideoSelects: PropTypes.func
};

export default VideoItem;