import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/users.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';



function Users(props) {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return <span className={props.currentPage === p && s.selectedPage}
            onClick={(e) => { props.onPageChanched(p) }} >{p}</span>
        })}
      </div>
      {props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.large != null ? u.photos.large : userPhoto} alt=''
                className={s.userPhoto} />
            </NavLink>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "93bc148d-964b-405d-98a7-6d943ae47cfc"
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(u.id)
                    }
                  })
              }} >Unfollow</button>
              : <button onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "93bc148d-964b-405d-98a7-6d943ae47cfc"
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id)
                    }
                  })
              }} >Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.city"}</div>
            <div>{"u.location.country"}</div>
          </span>
        </span>
      </div>)
      }
    </div>
  )

}



export default Users