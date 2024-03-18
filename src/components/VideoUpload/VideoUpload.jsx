import { useNavigate } from "react-router-dom";
import VideoUploadForm from "../VideoUploadForm/VideoUploadForm";
import VideoUploadSubmit from "../VideoUploadSubmit/VideoUploadSubmit";
import VideoUploadThumbnail from "../VideoUploadThumbnail/VideoUploadThumbnail";
import "./VideoUpload.scss";

const VideoUpload = () => {

  const  navigate  = useNavigate()

  const handleClick = () => {
    alert("upload!!");
    navigate('/');
  }


  return (
    <div className="video-upload">
      <h1>Upload Video </h1>
      <div className="video-upload__divider" />
      <div className="video-upload__top">
        <div className="video-upload__left">
          <VideoUploadThumbnail />
        </div>
        <div className="video-upload__right">
          <VideoUploadForm />
        </div>
      </div>
      <div className="video-upload__divider" />
      <div className="video-upload__buttom">
        <VideoUploadSubmit handleClick={handleClick} />
      </div>
    </div>
  );
};

export default VideoUpload;
