import { Link, NavLink, Navigate } from "react-router-dom";
import "./NextVideoCard.scss";
import { baseURL } from "../../common/Common";

const NextVideoCard = (props) => {
  const { video } = props;
  const imgUrl = baseURL + video.image

  return (
    <NavLink className="navlink" to={`/videos/${video.id}`}>
      <div className="card">
        <div className="card__img-container">
          <img
            className="card__img"
            src={imgUrl}
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
