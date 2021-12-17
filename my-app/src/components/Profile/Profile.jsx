import React from 'react';
import './Profile.modules.css';
import Image from './Image/Image';
import Info from './Info/Info';
import MyPostsContainer from './MyPosts/MyPostContainer';
const Profile = (props) => {
  return (
    <div>
      <div className="profiles">
        <Image />
        <Info />
      </div>
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
