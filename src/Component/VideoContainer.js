import React, { useEffect, useState } from "react";
import { Youtube_video_api } from "../utils/constants";
import { VideoCard } from "./videoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
 
  const getVideos = async () => {
    const data = await fetch(Youtube_video_api);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (<div className="flex flex-wrap">
   {videos.map((video)=>(
   <Link to={"/watch?v="+video.id}>
    <VideoCard key={video.id} info={video} />
   </Link>
   )) }
  </div>);
};

export default VideoContainer;
