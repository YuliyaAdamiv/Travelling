import React from 'react';
import {NavLink} from 'react-router-dom'
import SidebarItem from './SidebarItem/SidebarItem'
import InterestingPlaces from './InterestingPlaces/InterestingPlaces'
import './Sidebar.modules.css';
const Sidebar = (props) => {
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
      <div className="myFriend"> 
        My Friends
      </div>
      <div>
      {props.state.friend.map(friend => <SidebarItem name={friend.name} id={friend.id}/>)}
      </div>
      <div>
        <div className="namePlace">
        Interesting Places
        </div>
        {props.state.channel.map(channel => <InterestingPlaces name={channel.name}src={channel.src}/>)}
      </div>
    </div>
  );
};

export default Sidebar;
