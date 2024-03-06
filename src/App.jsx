import "./App.scss";
import Header from "./components/Header/Header";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import PlayNow from "./components/PlayNow/PlayNow";
import { useState } from "react";
import CommentDespNextVideo from "./components/CommentDespNextVideo/CommentDespNextVideo";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState({});
  //currentVideo

  const handleClick = (video) => {


  };

  return (
    <div className="container">
      <Header />
      <PlayNow videoClicked={videos[0]} />
      <CommentDespNextVideo
        videos={videos}
        videoDetails={videoDetails}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;
