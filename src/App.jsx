import "./App.scss";
import Header from "./components/Header/Header";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import NextVideo from "./components/NextVideo/NextVideo";

const App = () => {
  console.log("videos :", videos);
  console.log("videos :", videoDetails);
  console.log("videos :", videoDetails[0].comments);
  return (
    <>
      <Header />
      <NextVideo videoList={videos}/>
    </>
  );
};

export default App;
