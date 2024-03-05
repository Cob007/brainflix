import "./NextVideoCard.scss";

const NextVideoCard = (props) => {
  const { video } = props;
  return (
    <div className="card">
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
  );
};

export default NextVideoCard;
