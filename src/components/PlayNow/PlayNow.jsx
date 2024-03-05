import "./PlayNow.scss";

const PlayNow = (props) => {
    const {videoClicked} = props 
  return (
    <div className="playnow-container">
      <video
        controls
        src={videoClicked.video}
        poster={videoClicked.image}
        width="620"
        className="playnow-container__video"
      >
      </video>
    </div>
  );
};

export default PlayNow;
