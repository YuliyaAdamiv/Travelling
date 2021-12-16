import React from 'react';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profileReducer';

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };
  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
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
