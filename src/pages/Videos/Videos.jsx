import CommentDespNextVideo from "../../components/CommentDespNextVideo/CommentDespNextVideo";
import PlayNow from "../../components/PlayNow/PlayNow";
import { useEffect, useState } from "react";
import { baseURL, apiKey } from "../../common/Common";
import axios from "axios";
import { useParams } from "react-router-dom";

const Videos = () => {
  const [videosData, setVideosData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  const { videoId } = useParams();

  const getVideosDetails = async (videoId) => {
    try {
      const getVideosDetailsURL = `${baseURL}videos/${videoId}?api_key=${apiKey}`;
      const res = await axios.get(getVideosDetailsURL);
      console.log(res)
      setSelectedVideo((prev) => res.data);
    } catch (err) {
      
    }
  };

  const loadVideosFromRemote = async () => {
    try {
      const getVideosURL = `${baseURL}videos?api_key=${apiKey}`;
      const res = await axios.get(getVideosURL).then((result) => {
        setVideosData((prev) => result.data);
        if (videoId !== undefined) {
          getVideosDetails(videoId);
        } else {
          getVideosDetails(result.data[0].id);
        }
      });
    } catch (err) {

    }
  };

  useEffect(() => {
    loadVideosFromRemote();
  }, [videoId]);

  return (
    selectedVideo && (
      <main className="container">
        <PlayNow videoClicked={selectedVideo} />
        <CommentDespNextVideo
          videos={videosData}
          videoDetails={selectedVideo}
        />
      </main>
    )
  );
};

export default Videos;
