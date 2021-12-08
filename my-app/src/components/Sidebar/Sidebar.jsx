import React from 'react';
import {NavLink} from 'react-router-dom'
import './Sidebar.modules.css';
const Sidebar = () => {
  return (
    <div className="nav">
      <div className="item">
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className="item"> 
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className="item">
        <NavLink to="/news">News</NavLink>
      </div>
      <div className="item">
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className="item">
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
