import "./VideoUploadSubmit.scss";
import UploadIcon from "../../assets/icons/upload.svg"

const VideoUploadSubmit = () => {
  return (
    <section className="publish">
      <div className="publish__upload-container">
        <div className="publish__sub-upload">
          <img
            className="publish__upload-icon"
            src={UploadIcon}
            alt="upload icon"
          />
          <button className="publish__upload-btn">PUBLISH</button>
        </div>
      </div>
      <div className="publish__cancel-container">
          <p className="publish__cancel-btn">Cancel</p>
      </div>
    </section>
  );
};

export default VideoUploadSubmit;
