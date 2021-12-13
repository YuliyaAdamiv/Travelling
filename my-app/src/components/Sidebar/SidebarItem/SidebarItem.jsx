import React from 'react';
import {NavLink} from 'react-router-dom';
import './SiderbarItem.modules.css';
const SidebarItems = (props) => {
  return (
    <div className="sidebar-container">
      <div>
        <img
          className="ava-friend"
          src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100"
          alt="profile"
        />
      </div>
      <div className="text">
        <NavLink to={'/dialogs/' + props.id}>{props.name} </NavLink>
      </div>
    </div>
  );
};
export default SidebarItems;
