import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import './Profile.module.css'

const Profile = (props) => {

  return (
    <div className='profile'>
      <ProfileInfo profile={props.profile} status={props.status}
                   updateStatus={props.updateStatus}/>
      <MyPostsContainer/>
    </div>);
}

export default Profile;
