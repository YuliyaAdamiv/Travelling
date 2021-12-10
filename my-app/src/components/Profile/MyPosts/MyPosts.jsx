import React from 'react';
import Post from './Post/Post';
const MyPosts = (props) => {
  return (
    <div>
      My Posts
      {props.state.posts.map(posts => <Post message={posts.message} like={posts.like}/>)}
    </div>
  );
};

export default MyPosts;
