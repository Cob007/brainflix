import profilePicture from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from '../../assets/icons/add_comment.svg';

const PostComment = () => {
  return (
    <section className="post-comment">
      <div className="post-comment__pp-container">
        <img
          className="post-comment__pp"
          src={profilePicture}
          alt="profile picture"
        />
      </div>
      <div className="post-comment__add-comment">
        <div className="post-comment__body">
          <h2 class="post-comment__title">Join the Conversation</h2>
          <textarea
            name="comment"
            class="post-comment__textarea"
            placeholder="Add a new comment"
          />
        </div>
        <div className="post-commen__upload-container">
          <span className="post-commen__icon-cont">
            <img
              className="post-commen__upload-icon"
              src={CommentIcon}
              alt="Comment icon"
            />
          </span>
          <button className="post-commen__upload-btn">COMMENT</button>
        </div>
      </div>
    </section>
  );
};

export default PostComment;
