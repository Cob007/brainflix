import { NavLink } from "react-router-dom";
import "./NextVideoCard.scss";

const NextVideoCard = (props) => {
  const { video } = props;

  const click = () => {
    handleClick(video.id);
  };

  return (
    <NavLink className="navlink" to={`/videos/${video.id}` }>
    <div
      onClick={() => {
        //handleClick(video.id);
      }}
      className="card"
    >
        <div className="card__img-container">
          <img
            className="card__img"
            src={video.image}
            alt="video placeholder image"
          />
        </div>
        <div className="card__details-container">
          <h3 className="card__title">{video.title}</h3>
          <p className="card__channel">{video.channel}</p>
        </div>
    </div>
    </NavLink>
  );
};

export default NextVideoCard;
