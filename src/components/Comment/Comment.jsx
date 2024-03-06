import CommentCard from "../CommentCard/CommentCard";
import PostComment from "../PostComment/PostComment";
import "./Comment.scss";

const Comment = (props) => {
  const { commentList } = props;

  return (
    <section className="comment">
      <h3 className="comment__count">{commentList.length} Comments</h3>
      <PostComment />
      <ul className="comment__comment-list">
        {commentList.map((commentObj, index) => (
          <li key={index}>
            <>         
            <div className="comment__divider"/> 
              <CommentCard comment={commentObj} />
            </>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Comment;
