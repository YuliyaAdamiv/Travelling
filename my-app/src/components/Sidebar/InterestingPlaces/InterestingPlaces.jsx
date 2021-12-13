import React from 'react';
import './InterestingPlaces.module.css';

const SidebarItems = (props) => {
  return (
    <div>
      <img className="interestingPlaces" src={props.src} alt={props.name}></img>
    </div>
  );
};
export default SidebarItems;
