import s from './Posts.module.css';

function Post(props) {
  return <div>

    <div className={s.posts}>
      <div className={s.item}>
        <img src="https://politeka.net/images/2019/11/07/s5v80qnxgMYD0GaNAAxhNyR4SlIvGSIR5UbLlJzR.jpeg" alt="" />
        {props.message}
        <div>
          <span>{props.likesCount}</span>
        </div>
      </div>
    </div>
  </div>
}

export default Post