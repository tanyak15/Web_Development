import React ,{ useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetails";
import useVideos from "../hooks/useVideos";

const App = () => {
    const [selectedVideo , setSelectedVideo] = useState(null);
    const [videos, search ] = useVideos('buildings');
    

    useEffect(()=>{
        setSelectedVideo(videos[0]);
    } , [videos]);
    
    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                    {/* <VideoList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos}/> */}
                    <VideoList onVideoSelect={setSelectedVideo} videos={videos}/>
                    </div> 
                </div>
           
            </div>
        </div>
        );

};
export default App;