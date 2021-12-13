import React from 'react';
import './Profile.modules.css';
import Image from './Image/Image';
import Info from './Info/Info';
import MyPosts from './MyPosts/MyPosts';
const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <div className="profiles">
        <Image />
        <Info />
      </div>
      <MyPosts state={props.state} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
