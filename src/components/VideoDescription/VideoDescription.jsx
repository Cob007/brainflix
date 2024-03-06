import DateConverter from "../../common/Common";
import "./VideoDescription.scss";
import ViewsIcon from "../../assets/icons/views.svg";
import LikesIcon from "../../assets/icons/likes.svg";

const VideoDescription = (props) => {
  const { clickedVideo } = props;
  return (
    <div className="vd-container">
      <h1 className="vd-container__title" >{clickedVideo.title}</h1>
      <div className="vd-container__divider vd-container__invisible  "/>
      <section className="vd-container__analytics">
        <div className="vd-container__date-author">
          <h3 className="vd-container__author">
            By {clickedVideo.channel}
          </h3>
          <p className="vd-container__date">{DateConverter(clickedVideo.timestamp)}</p>
        </div>
        <div className="vd-container__views-like" >
          <div className="vd-container__views">
            <img className="vd-container__views-icon" src={ViewsIcon} alt="number of view" />
            <p className="vd-container__views-text">{clickedVideo.views}</p>
          </div>
          <div className="vd-container__likes">
            <img className="vd-container__likes-icon" src={LikesIcon} alt="number of likes" />
            <p className="vd-container__likes-text">{clickedVideo.likes}</p>
          </div>
        </div>
      </section>
      <div className="vd-container__divider" />
      <div className="vd-container__desp">
        <p className="vd-container__desp-text">{clickedVideo.description}</p>
      </div>
    </div>
  );
};

export default VideoDescription;
