import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getStatus, idProfile, setUserProfile, updateStatus} from "../../redux/profile-reduce";
import { withRouter } from "react-router-dom";
import {wihtAuthRedirect} from "../../hoc/wihtAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if(!userId) {
        this.props.history.push("/login");
      }
    }
   this.props.idProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <div>
        <Profile {...this.props}
                 profile={this.props.profile}
                 status = {this.props.status}
                 updateStatus={this.props.updateStatus}/>
      </div>);
  }
}


let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId
  }};

export default compose(
  connect(mapStateToProps, {setUserProfile, idProfile, getStatus, updateStatus}),
  withRouter,
  wihtAuthRedirect
)(ProfileContainer)


