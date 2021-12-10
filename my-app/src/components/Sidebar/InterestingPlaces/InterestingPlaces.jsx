import React from 'react';
import './InterestingPlaces.modules.css'

const SidebarItems = (props) => {
  console.log(props);
  return (
    <div >
      <img className="interestingPlaces" src={props.src} alt={props.name}></img>
    </div>
  );
};
export default SidebarItems;
