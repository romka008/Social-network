import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userID = this.props.match.params.userID
    if (!userID) {
      userID = this.props.autorizedUserID;
      if (!userID) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userID)
    // setTimeout(() => {
    this.props.getStatus(userID)
    // }, 1000);

  }

  render() {
    console.log('RENDER')
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    )
  }
}



let mapStateToProps = (state) => {
  console.log('mapStateToProps')
  return ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserID: state.auth.userID,
  isAuth: state.auth.isAuth
  })
}


export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  // withAuthRedirect,
)(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
