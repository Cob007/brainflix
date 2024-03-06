import DateConverter from '../../common/Common';
import './CommentCard.scss'

const CommentCard = (props) => {
  const { comment } = props;

  return (
    <section className="comment-card">
      <div className="comment-card__pp-img">
        <img className="comment-card__commenter-img" />
      </div>
      <div className="comment-card__comment-details">
        <div className="comment-card__header">
          <h3 className="comment-card__name">{comment.name}</h3>
          <p className="comment-card__date">{DateConverter(comment.timestamp)}</p>
        </div>
        <div>
          <p className="comment-card__desp">{comment.comment}</p>
        </div>
      </div>
    </section>
  );
};

export default CommentCard;
