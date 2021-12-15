import React from 'react';
import './Profile.modules.css';
import Image from './Image/Image';
import Info from './Info/Info';
import MyPosts from './MyPosts/MyPosts';
const Profile = (props) => {
  return (
    <div>
      <div className="profiles">
        <Image />
        <Info />
      </div>
      <MyPosts
        state={props.state}
        newPostText={props.state.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
