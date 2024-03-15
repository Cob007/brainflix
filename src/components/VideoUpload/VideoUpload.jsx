import VideoUploadForm from "../VideoUploadForm/VideoUploadForm";
import VideoUploadSubmit from "../VideoUploadSubmit/VideoUploadSubmit";
import VideoUploadThumbnail from "../VideoUploadThumbnail/VideoUploadThumbnail";
import "./VideoUpload.scss";

const VideoUpload = () => {
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
        <VideoUploadSubmit />
      </div>
    </div>
  );
};

export default VideoUpload;
