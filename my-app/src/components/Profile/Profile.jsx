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
        store={props.store}
      />
    </div>
  );
};

export default Profile;
