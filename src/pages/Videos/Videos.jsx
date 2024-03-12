import CommentDespNextVideo from "../../components/CommentDespNextVideo/CommentDespNextVideo";
import Header from "../../components/Header/Header";
import PlayNow from "../../components/PlayNow/PlayNow";
import { useEffect, useState } from "react";
import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import { apiKey, baseURL } from "../../common/Common";

const Videos = () => {
  const [videosData, setVideosData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});


  const getVideosDetails = async (videoId) => {
    try {
        const getVideosDetailsURL = `${baseURL}videos/${videoId}?api_key=${apiKey}`;
        const res = await axios.get(getVideosDetailsURL);
        setSelectedVideo(prev => res.data)
    }catch(err){

    }
  }

  const loadVideosFromRemote = async () => {
    const getVideosURL = `${baseURL}videos?api_key=${apiKey}`;
    const res = await axios.get(getVideosURL);
    res
      .then((result) => {
        ///videos/:id
        console.log(result);
        setVideosData((prev) => result.data);
        getVideosDetails(result.data[0].id);
      })
      .catch((err) => {
        console.log("loadVideosFromRemote : ", err )
      });
  };

  useEffect(() => {
    loadVideosFromRemote();
  }, []);

  const handleClick = (videoId) => {
    //const selectVideo = videoDetails.find((video) => video.id === videoId);
    //setSelectedVideo((prev) => selectVideo);
  };
  return (
    <div className="container">
      <PlayNow videoClicked={selectedVideo} />
      <CommentDespNextVideo
        videos={videos}
        videoDetails={selectedVideo}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Videos;
