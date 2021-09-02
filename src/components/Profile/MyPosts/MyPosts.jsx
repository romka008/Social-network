import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';



function MyPosts(props) {

  let postsElement = props.posts.map(p => <Post message={p.messages} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <div className={s.newText}>
            < textarea onChange={onPostChange} name="" ref={newPostElement} cols="30" rows="5"
              value={props.newPostText} />
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