import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {

  let posts = [
    { id: 1, messages: 'What is it?', likesCount: '100' },
    { id: 2, messages: 'Where are u?', likesCount: '5634' },
  ]

  let postsElement = posts.map(p => <Post message={p.messages} likesCount={p.likesCount} />)

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
          {postsElement}
        </div>
      </div>
    </div>
  )
}

export default MyPosts