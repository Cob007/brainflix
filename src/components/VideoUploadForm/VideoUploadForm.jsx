import "./VideoUploadForm.scss";

const VideoUploadForm = (props) => {
  const { setData } = props;

  const handleTitleChange = (e) => {
   console.log(e.target.value)
    setData((prevState) => ({ ...prevState, "title": e.target.value }));
  };

  const handleDespChange = (e) => {
    setData((prevState) => ({ ...prevState, "description": e.target.value }));
  };

  return (
    <div className="cont-form-upload">
      <div className="cont-form-upload__title-div">
        <label className="cont-form-upload__label">TITLE YOUR VIDEO</label>
        <input
          type="text"
          name="video-title"
          className="cont-form-upload__title"
          placeholder="Add a title to your video"
          onChange={handleTitleChange}
        />
      </div>

      <div className="cont-form-upload__desp-div">
        <label className="cont-form-upload__label">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea
          type="text"
          name="video-title"
          className="cont-form-upload__desp"
          placeholder="Add a description to your video"
          onChange={handleDespChange}
        />
      </div>
    </div>
  );
};
export default VideoUploadForm;
