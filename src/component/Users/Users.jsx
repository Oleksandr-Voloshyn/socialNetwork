import React from "react";
import styles from "./users.module.css";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";


let Users = ({currentPage, onPageChange, totalUsersCount, pageSize, ...props}) => {

  return (
    <div>
      <Paginator currentPage={currentPage} onPageChange={onPageChange}
                 totalItemsCount={totalUsersCount} pageSize={pageSize}/>

      <div className={styles.usersVud}>
        {
          props.users.map(u => <User key={u.id} user={u}
                                     followingInProgress={props.followingInProgress}
                                     follow={props.follow} unfollow={props.unfollow}
                                />
        )}
      </div>
    </div>
  )
}

export default Users;
