import NextVideoCard from "../NextVideoCard/NextVideoCard";
import "./NextVideo.scss";

const NextVideo = (props) => {
  const { selectedVideo, videoList, handleClick } = props;

  const nextVidoes = videoList.map((videoItem) =>
    videoItem.id === selectedVideo.id ? (
      <div key={videoItem.id}></div>
    ) : (
      <li key={videoItem.id} className="nv-container__item">
        <NextVideoCard video={videoItem} handleClick={handleClick} />
      </li>
    )
  );
  return (
    <div className="nv-container">
      <p className="nv-container__title">NEXT VIDEOS</p>
      <ul className="nv-container__list">{nextVidoes}</ul>
    </div>
  );
};

export default NextVideo;
