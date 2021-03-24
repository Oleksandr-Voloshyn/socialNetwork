import React from "react";
import {addPostAction, updataPostChangeAction} from "../../../redux/profile-reduce";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    post: state.profilePage.post,
    newPostText: state.profilePage.newPostText,
    isAuth: state.auth.isAuth
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostAction(newPostText));
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
