import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

  let postsElement = props.posts.map(p => <Post message={p.messages} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text)
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea name="" ref={newPostElement} cols="30" rows="5"></textarea>
          </div>
          <div>
            <button onClick={addPost}>New post</button>
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