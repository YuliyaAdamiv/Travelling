import React from 'react';
import {NavLink} from 'react-router-dom'
import './Sidebar.modules.css';
const Sidebar = () => {
  return (
    <div className="nav">
      <div>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news">News</NavLink>
      </div>
      <div>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
