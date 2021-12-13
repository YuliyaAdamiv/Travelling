import React from 'react';
import Post from './Post/Post';
const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };
  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      {props.state.posts.map((posts) => (
        <Post message={posts.message} like={posts.like} />
      ))}
    </div>
  );
};

export default MyPosts;
