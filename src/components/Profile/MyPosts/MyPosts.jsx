import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';


const maxLength15 = maxLengthCreator(15)

function MyPosts(props) {
  let postsElement = props.posts.map(p => <Post message={p.messages} likesCount={p.likesCount} key={p.id} />)

  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <AddPostFormRedux onSubmit={addNewPost} />
        <div className={s.posts}>
          {postsElement}
        </div>
      </div>
    </div>
  )
}

const addPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div className={s.newText}>
        <Field component={Textarea} name='newPostText' placeholder='Post message' 
        validate={[required, maxLength15]} />
      </div>
      <div>
        <button>New post</button>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({ form: 'postAddForm' })(addPostForm)


export default MyPosts