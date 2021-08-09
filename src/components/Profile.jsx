import s from './Profile.module.css';

function Profile() {
    return <div className={s.content}>
    <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701313431.jpg" alt="" />
    <div>
    ava + description
  </div>
  <div>
    My posts
    <div>
      New post
    </div>
    <div className={s.posts}>
      <div className={s.item}>
        post 1
      </div>
      <div className={s.item}>
        post 2
      </div>
    </div>
  </div>
  </div>
}

export default Profile