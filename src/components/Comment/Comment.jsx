import PostComment from '../PostComment/PostComment';
import './Comment.scss'

const Comment = (props) => {

    const { commentList } = props;

    console.log("Hi")

    return (
    <section className='comment'>
        <h3 className='comment__count'>{commentList.length} Comments</h3>
        <PostComment />
    
    </section>
    )
}

export default Comment;