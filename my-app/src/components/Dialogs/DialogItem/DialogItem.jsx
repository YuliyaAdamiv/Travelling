import React from 'react';
import {NavLink} from 'react-router-dom';
import './DialogItem.modules.css'
const Dialog = (props) => {
    return(
        <div className="dialog">
          <img className="ava"
        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100"
        alt="profile"
      /> 
        <NavLink to={"/dialogs/"+ props.id}>{props.name}</NavLink>
      </div>
    )
}
export default Dialog