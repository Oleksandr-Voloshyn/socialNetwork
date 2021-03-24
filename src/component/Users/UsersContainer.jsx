import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

import {
  follow,
  getUsersThunkCreater,
  setCurrentPage,
  setIsFetching,
  setTotalUsersCount,
  setUsers,
  toggelFollowingProgres, unfollow,


} from "../../redux/users-reduce";
import {
  getCurrentPage, getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount, getUsers,
} from "../../redux/selector/usersSelector";


class UsersAPI extends React.Component {

  componentDidMount() {
    this.props.getUsersThunkCreater(this.props.currentPage, this.props.pageSize)

  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
  this.props.getUsersThunkCreater(pageNumber, this.props.pageSize)
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChange={this.onPageChange}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             followingInProgress={this.props.followingInProgress}
             toggelFollowingProgres={this.props.toggelFollowingProgres}
      />

    </>
  }


}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)

  }
};


export default connect(mapStateToProps, {
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  toggelFollowingProgres,
  getUsersThunkCreater,
  follow,
  unfollow
})(UsersAPI);












// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (usersCount) => {
//       dispatch(setTotalUsersCountAC(usersCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(setIsFetchingAC(isFetching))
//     }
//
//
//   }
// }
