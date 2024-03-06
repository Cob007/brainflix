import "./App.scss";
import Header from "./components/Header/Header";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import NextVideo from "./components/NextVideo/NextVideo";
import PlayNow from "./components/PlayNow/PlayNow";
import Comment from "./components/Comment/Comment";
import VideoDescription from "./components/VideoDescription/VideoDescription";

const App = () => {
  console.log("videos :", videos);
  console.log("videos :", videoDetails);
  console.log("videos :", videoDetails[0].comments);
  return (
    <div className="container">
      <Header />
      <PlayNow videoClicked={videos[0]}/>
      <VideoDescription clickedVideo={videoDetails[0]}/>
      <Comment commentList={videoDetails[0].comments}/>
      <NextVideo videoList={videos}/>
    </div>
  );
};

export default App;
