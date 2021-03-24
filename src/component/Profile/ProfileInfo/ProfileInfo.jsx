import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
      </div>

      <div className={s.avaDesc}>
        <img src={profile.photos.large}/>
        <div>
          <ProfileStatusWithHooks status = {status}
                         updateStatus={updateStatus}/>
          <span>{profile.fullName}</span> <br/>
          <span>{profile.contacts.facebook}</span> <br/>
          <span>{profile.lookingForAJob}</span>
        </div>
      </div>
    </div>);
}

export default ProfileInfo;
