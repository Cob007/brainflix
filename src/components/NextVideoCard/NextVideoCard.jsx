import "./NextVideoCard.scss";

const NextVideoCard = ({props}) => {
    console.log("video:", props.image)
  return (
    <div className="card">
      <div className="card__img-container">
        <img
          className="card__img"
          src={props.image}
          alt="video placeholder image"
        />
      </div>
      <div className="card__details-container">
        <h3 className="card__title">{props.title}</h3>
        <p className="card__channel">{props.channel}</p>
      </div>
    </div>
  );
};

export default NextVideoCard;
