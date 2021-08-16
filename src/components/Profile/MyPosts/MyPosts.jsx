import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {

  let postData = [
    { id: 1, messages: 'What is it?', likesCount: '100' },
    { id: 2, messages: 'Where are u?', likesCount: '5634' },
  ]

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
          <Post message={postData[0].messages} likesCount={postData[0].likesCount} />
          <Post message={postData[1].messages} likesCount={postData[1].likesCount} />
        </div>
      </div>
    </div>
  )
}

export default MyPosts