import React from 'react';
import Post from './Post/Post';
import Like from './Post/Like/Like'
const MyPosts = () => {
  return (
    <div>
      My Posts
      <Post message="Hi, how are you?"/>
      <Like value="15"/>
      <Post message="Hello!"/>
      <Like value="20"/>
    </div>
  );
};

export default MyPosts;
