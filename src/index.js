import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDZ1XlkuiWfSFxn01NdiMBnqeQDCvgMXaE';

class App extends Component {
  constructor(props) {
    super(props);

    // this is component level state.
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('Logan Paul');
  }

    videoSearch(term){
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos:videos,
          selectedVideo: videos[0]

        });
        });
        //console.log(videos);
        // this.setState({videos: videos}); <----- this is a old synthax
        // this.setState({videos}); <----- this is a new synthax


    }


  render() {

      const videoSearch = _.debounce((term) => { this.videoSearch(term) },300)


    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
    /* We are passing prop videos to VideoList */
  }
}

//Take this^ components generated HTML and put it on the page(in the DOM) in the Div container
// Here you instantiate the App component. (You're Creating an instance of APP (<App/>))
ReactDOM.render(
  <App/>, document.getElementById("root"));
