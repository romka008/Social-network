import s from './MyPosts.module.css';
import Posts from './Post/Posts';

function MyPosts() {
  return (
    <div>
      <div>
        My posts
        <div>
          <textarea name="" id="" cols="30" rows="5"></textarea>
          <button>New post</button>
        </div>
        <div className={s.posts}>
        <Posts />
        </div>
      </div>
    </div>
  )
}

export default MyPosts