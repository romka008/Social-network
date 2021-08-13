import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>
          <div>
            <button>New post</button>
          </div>
        </div>
        <div className={s.posts}>
          <Post message='Hi, how are you' />
          <Post message="It's my first post" />
        </div>
      </div>
    </div>
  )
}

export default MyPosts