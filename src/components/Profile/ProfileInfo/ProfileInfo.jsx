import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';

function ProfileInfo(props) {
if (!props.profile) {
return <Preloader/>
}

  return (
    <div>
      <div>
        <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701313431.jpg" alt="" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}  />
        <div>
        Обо мне: {props.profile.aboutMe}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo