import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userID = this.props.match.params.userID
    if (!userID) {
      userID = 2;
    }
    this.props.getUserProfile(userID)
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}



let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})


export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  // withAuthRedirect,
)(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
