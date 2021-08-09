import s from './Posts.module.css';

function Posts() {
  return <div>

    <div className={s.posts}>
      <div className={s.item}>
        <img src="https://i.pinimg.com/originals/08/3e/9d/083e9d9ee96acc3c14c036d5990f18fd.png" alt="" />
        post 1
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  </div>

}

export default Posts