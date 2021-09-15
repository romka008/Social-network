import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, toggleFollowingProgress, getUsers, } from '../../redux/users-reducer';
import Users from './Users';
import s from './Users.module.css';
import Preloader from '../common/preloader/Preloader';



class UsersAPIComponent extends React.Component {
  componentDidMount() {

this.props.getUsers(this.props.currentPage, this.props.pageSize);
    // this.props.toggleIsFetching(true);
    // getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items)
    //     this.props.setTotalUsersCount(data.totalCount)
    //   })
  }

  onPageChanched = (pageNumber) => {

    this.props.getUsers(pageNumber, this.props.pageSize);
    // this.props.setCurrentPage(pageNumber)
    // this.props.toggleIsFetching(true);
    // getUsers(pageNumber, this.props.pageSize).then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items)
    //   })
  }

  render() {
    return <>
      {this.props.isFetching ?
        <Preloader />
        : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanched={this.onPageChanched}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userID) => {
//       dispatch(followAC(userID))
//     },
//     unfollow: (userID) => {
//       dispatch(unfollowAC(userID))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }


const UsersContainer = connect(mapStateToProps, { 
  follow, unfollow, toggleFollowingProgress, getUsers})(UsersAPIComponent)

export default UsersContainer;