import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos , onVideoSelect }) => {
        // props.videos arrays of list of video
        const renderedList = videos.map((video) => {
                return <VideoItem 
                key={video.id.videoId}
                onVideoSelect={onVideoSelect} video={video}/>
            })    
            return <div>{renderedList}</div>
        };
        
        // OR

        // const VideoList = (props) => {
        //     // props.videos arrays of list of video
        //     const renderedList = props.videos.map((video) => {
        //         return <VideoItem onvideo={video}/>
        //     })    
        //     return (
        //         <div className="ui relaxed divided list">
        //             {renderedList}
        //         </div>
        //     )
        // };

        export default VideoList;