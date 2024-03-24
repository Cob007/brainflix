import { baseURL } from "../../common/Common";
import "./PlayNow.scss";

const PlayNow = (props) => {
    const {videoClicked} = props 
    const imgUrl = baseURL + videoClicked.image
  return (
    <div className="playnow-container">
      <video
        controls
        src={videoClicked.video}
        poster={imgUrl}
        width="620"
        className="playnow-container__video"
      >
      </video>
    </div>
  );
};

export default PlayNow;
