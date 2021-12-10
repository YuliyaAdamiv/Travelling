import React from 'react';
import './Post.modules.css';
const Post = (props) => {
  return (
    <div>
      <img
        className="post"
        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1"
        alt="foto"
      />
      {props.message}
      <div>like {props.like}</div>
    </div>
  );
};

export default Post;
