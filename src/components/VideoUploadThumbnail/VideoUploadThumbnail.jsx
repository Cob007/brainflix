import "./VideoUploadThumbnail.scss";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import VideoUploadForm from "../VideoUploadForm/VideoUploadForm";
import VideoUploadSubmit from "../VideoUploadSubmit/VideoUploadSubmit";


const VideoUploadThumbnail = () => {
  return (
    <section className="video-upload-cont">
      <p className="video-upload-cont__desp">VIDEO THUMBNAIL</p>
      <div className="video-upload-cont__thumb-cont">
        <img
          className="video-upload-cont__img"
          src={videoThumbnail}
          alt="video upload thumbnail"
        />
      </div>    
    </section>
  );
};
export default VideoUploadThumbnail;
