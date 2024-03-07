import NextVideo from "../NextVideo/NextVideo";
import "./CommentDespNextVideo.scss";
import VideoDescription from "../VideoDescription/VideoDescription";
import Comment from "../Comment/Comment";

const CommentDespNextVideo = (props) => {
  const { videos, videoDetails, handleClick } = props;

  return (
    <div className="group-container">
      <div className="group-container__desp-comment">
        <VideoDescription clickedVideo={videoDetails} />
        <Comment commentList={videoDetails.comments} />
      </div>
      <div className="group-container__divider"></div>
      <div className="group-container__next-videos">
        <NextVideo selectedVideo={videoDetails} videoList={videos}  handleClick={handleClick}/>
      </div>
    </div>
  );
};

export default CommentDespNextVideo;
