import React from "react";
import "./header.css";
import {NavLink} from "react-router-dom";
import {MENU} from "../App";


const Header = () => {
    return (
        <div className="header">
            {MENU.map((menuItem) => (
                <NavLink to={menuItem.path}
                         activeClassName="menu_item--active"
                         className="menu_item">
                    {menuItem.title}
                </NavLink>
            ))}
        </div>
    )
}




export default Header;