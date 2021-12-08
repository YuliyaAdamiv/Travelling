
import React from 'react';
import './Profile.modules.css';
import Image from './Image/Image'
import Info from './Info/Info'
import MyPosts from './MyPosts/MyPosts'
const Profile = () => {
  return (
    <div >
      <Image />
      <Info />
      <MyPosts />
    </div>
  );
};

export default Profile;
