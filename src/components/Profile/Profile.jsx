import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return <div className={s.content}>
    <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701313431.jpg" alt="" />
    <div>
    ava + description
  </div>
  <MyPosts />
  </div>
}

export default Profile