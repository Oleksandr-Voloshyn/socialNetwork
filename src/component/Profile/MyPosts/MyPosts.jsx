import React from "react";
import s from './MyPosts.module.css';
import Post from "../Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControlor/FormsControler";

const maxLength = maxLengthCreator(10);

const MyPosts = (props) => {

  let postElem = props.post.map(p => <Post message={p.message} like={p.like}/>)

  let onAddPost = (value) => {
    props.addPost(value.newPostText);
  }

  return (
    <div className={s.myPost}>
      <h3>My Post</h3>
      <div>
        <PostReduxForm onSubmit={onAddPost}/>
      </div>
      <div className={s.posts}>
        {postElem}
      </div>
    </div>);
}

const addPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={"newPostText"}
               placeholder='Post message'
        validate={[required, maxLength]}/>
      </div>
      <button> Add Post</button>
    </form>
  )
}
const PostReduxForm = reduxForm({form: 'post'})(addPost)

export default MyPosts;
