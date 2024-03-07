import NextVideoCard from "../NextVideoCard/NextVideoCard";
import './NextVideo.scss'

const NextVideo = (props) => {
  const { selectedVideo, videoList, handleClick} = props;
  return (
    <div className="nv-container">
      <p className="nv-container__title">NEXT VIDEOS</p>
      <ul className="nv-container__list">
        {videoList.map((videoItem, index) => (
            videoItem.id === selectedVideo.id ? <></> :
          <li className="nv-container__item"
             key={index}>
            <NextVideoCard video={videoItem} handleClick={handleClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NextVideo;
