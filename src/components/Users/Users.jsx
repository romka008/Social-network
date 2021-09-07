import React from 'react';
import s from './Users.module.css';

function Users(props) {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoURL: 'https://rusdialog.ru/images/news/a4c4a779d7b68e1ff93f91708e12db3a.jpg',
        followed: false,
        fullName: 'Sergey',
        status: 'I am a boss',
        location: { city: 'New York', country: 'Unated States' }
      },
      {
        id: 2,
        photoURL: 'http://almode.ru/uploads/posts/2021-03/1617045923_19-p-dmitrii-nagiev-21.jpg',
        followed: true,
        fullName: 'Dmitry',
        status: 'I am a boss too',
        location: { city: 'Moscow', country: 'Russia' }
      },
      {
        id: 3,
        photoURL: 'https://img5.goodfon.ru/wallpaper/nbig/e/8a/vzgliad-poza-model-portret-aktrisa-model-hair-actress-emil-4.jpg',
        followed: true,
        fullName: 'Emily',
        status: 'I am a boss too',
        location: { city: 'London', country: 'England' }
      },
    ]
    )
  }
  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photoURL} className={s.userPhoto} />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                : <button onClick={() => { props.follow(u.id) }} >Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  )
}

export default Users