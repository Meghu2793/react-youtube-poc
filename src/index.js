import _ from 'lodash';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//API KEY for youtube APIs
const API_KEY = 'AIzaSyAMM8Sw524K9bk-WIoE42KxW4TGnI1WVwg';

//const - ES2016 syntax, const =~ var, its never gonna change
//JSX cannot be interpreted by the browser, it produces the actual HTML,
//React is used to create and manage our components.
//ReactDOM is used to render a component into the DOM, it is used to interact with actual DOM.
//Instantiate the component before we try to render into the DOM.
//<App /> actually creates the instances of the component

//create a new component. this component should produce some HTML
class App extends Component{
    constructor(props){
        super(props);

        this.state = { 
                videos : [] ,
                selectedVideo : null
            };
            this.videoSearch('computer science');
        }
        
        videoSearch(term){
            YTSearch({key : API_KEY, term : term}, (videos) => {
                this.setState({ 
                    videos: videos,
                    selectedVideo : videos[0]
                });
            });
        }

    render(){
        //lodash debounce to search after every 300ms
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
        return(
            <div>
                <SearchBar onSearchTermChange = {videoSearch}/>
                <VideoDetail video= {this.state.selectedVideo}/>
                {/* data passing from App to VideoList is called passing props */}
                <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo : selectedVideo})}
                videos = {this.state.videos} />
            </div>  
        );
    }
}


//Take the components to generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
