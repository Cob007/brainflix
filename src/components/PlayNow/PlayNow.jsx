import { baseURL } from "../../common/Common";
import "./PlayNow.scss";

const PlayNow = (props) => {
    const {videoClicked} = props 
    const imgUrl = baseURL + videoClicked.image
    const vidUrl = baseURL + videoClicked.video

  return (
    <div className="playnow-container">
      <video
        controls
        src={vidUrl}
        poster={imgUrl}
        width="620"
        className="playnow-container__video"
      >
      </video>
    </div>
  );
};

export default PlayNow;
