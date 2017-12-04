import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchbar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const ytAPI_KEY = 'AIzaSyAo7oqB94eRfyakj6L7isrzHHAXNYhyMCU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.onSearch('surfboards');
  }
  render() {
    const videoSearch = _.debounce((term) => this.onSearch(term), 300);
    return (
      <div>
        <SearchBar onSearch={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={video => this.onVideoSelect(video)} videos={this.state.videos} />
      </div>
    );
  }

  onVideoSelect(selectedVideo) {
    this.setState({ selectedVideo });
  }

  onSearch(term) {
    YTSearch({ key: ytAPI_KEY, term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
