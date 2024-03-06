import "./PostComment.scss";
import profilePicture from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/icons/add_comment.svg";

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
          <h2 className="post-comment__title">JOIN THE CONVERSATION</h2>
          <textarea
            name="comment"
            className="post-comment__textarea"
            placeholder="Add a new comment"
          />
        </div>
        <div className="post-comment__upload-container">
          <img
            className="post-comment__upload-icon"
            src={CommentIcon}
            alt="Comment icon"
          />
          <button className="post-comment__upload-btn">COMMENT</button>
        </div>
      </div>
    </section>
  );
};

export default PostComment;
