import React from "react";
import s from './Post.module.css'

const Post = (props) => {
  return (
   <div className={s.item}>
      <img src='https://poltava-city.com/sites/default/files/images/news/2017/10/233529.jpg'/>
     {props.message}
     <div>
       <span> like {props.like}</span>
     </div>
    </div>);
}

export default Post;
