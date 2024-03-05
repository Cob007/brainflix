import NextVideoCard from "../NextVideoCard/NextVideoCard";
import './NextVideo.scss'

const NextVideo = (props) => {
  const { videoList } = props;
  return (
    <div className="nv-container">
      <p className="nv-container__title">Next Video</p>
      <ul className="nv-container__list">
        {videoList.map((videoItem, index) => (
          <li className="nv-container__item" key={index}>
            <NextVideoCard video={videoItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NextVideo;
