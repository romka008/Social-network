import s from './ProfileInfo.module.css';

function ProfileInfo() {
  return (
    <div>
      <div>
        <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701313431.jpg" alt="" />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo