import "./App.scss";
import Header from "./components/Header/Header";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import PlayNow from "./components/PlayNow/PlayNow";
import { useState } from "react";
import CommentDespNextVideo from "./components/CommentDespNextVideo/CommentDespNextVideo";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  console.log(videos)
  console.log(videoDetails)



  const handleClick = async (videoId) => {
    const selectVideo = await videoDetails.find((video) => video.id === videoId);
    console.log("Selected video : ", selectVideo);
    setSelectedVideo(prev => selectVideo);
  };

  return (
    <div className="container">
      <Header />
      <PlayNow videoClicked={videos[0]} />
      <CommentDespNextVideo
        videos={videos}
        videoDetails={selectedVideo}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;
