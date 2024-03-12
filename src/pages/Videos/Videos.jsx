import CommentDespNextVideo from "../../components/CommentDespNextVideo/CommentDespNextVideo";
import Header from "../../components/Header/Header";
import PlayNow from "../../components/PlayNow/PlayNow";
import { useEffect, useState } from "react";
import { baseURL, apiKey } from "../../common/Common";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";

const Videos = () => {
  const [videosData, setVideosData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  const { videoId } = useParams();
  console.log("videoId fron param  here: ", videoId);

  const getVideosDetails = async (videoId) => {
    try {
      const getVideosDetailsURL = `${baseURL}videos/${videoId}?api_key=${apiKey}`;
      const res = await axios.get(getVideosDetailsURL);
      console.log(res.data);
      setSelectedVideo((prev) => res.data);
    } catch (err) {}
  };

  const loadVideosFromRemote = async () => {
    try {
      const getVideosURL = `${baseURL}videos?api_key=${apiKey}`;
      const res = await axios.get(getVideosURL).then((result) => {
        ///videos/:id
        console.log(result);
        setVideosData((prev) => result.data);
        if(videoId !== undefined){
            console.log("videoId : ", videoId);
            getVideosDetails(videoId)
        }else {
            getVideosDetails(result.data[0].id);
        }
      });
    } catch (err) {
      console.log("loadVideosFromRemote : ", err);
    }
  };

  useEffect(() => {
    loadVideosFromRemote();
  }, [videoId]);


  return selectedVideo === undefined ? (
    <></>
  ) : (
    <div className="container">
      <PlayNow videoClicked={selectedVideo} />
      <CommentDespNextVideo
        videos={videosData}
        videoDetails={selectedVideo}
      />
    </div>
  );
};

export default Videos;
