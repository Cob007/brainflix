import "./NextVideoCard.scss";

const NextVideoCard = (props) => {
  const { videoObj } = props;
  return (
    <div className="card">
      <div className="card__img-container">
        <img
          className="card__img"
          scr={videoObj.image}
          alt="video placeholder image"
        />
      </div>
      <div className="card__details-container">
        <h3 className="card__title">{videoObj.title}</h3>
        <p className="card__channel">{videoObj.channel}</p>
      </div>
    </div>
  );
};
