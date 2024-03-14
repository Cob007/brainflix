import "./VideoUpload.scss";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import VideoUploadForm from "../VideoUploadForm/VideoUploadForm";


const VideoUpload = () => {
  return (
    <section className="video-upload-cont">
      <h1>Upload Video </h1>
      <p className="video-upload-cont__desp">VIDEO THUMBNAIL</p>
      <div className="video-upload-cont__thumb-cont">
        <img
          className="video-upload-cont__img"
          src={videoThumbnail}
          alt="video upload thumbnail"
        />
      </div>
      <VideoUploadForm />

      
    </section>
  );
};
export default VideoUpload;
