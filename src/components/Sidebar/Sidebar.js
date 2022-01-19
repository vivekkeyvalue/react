import React from "react";
import './Sidebar.css';

const Sidebar = () => {
  return (<div className="sidebar">
    <div className="heading">
              
                    <span>Tokko Free</span>
    </div>
        <div className="menu_items">
                <li id ="performa">
                    <span>Home</span>
                </li>
                <li id ="performa">
                    <span>Catalog</span>
                </li>
                <li id ="performa">
                    <span>Orders</span>
                </li>
                <li id ="performa">
                    <span>Marketing</span>
                </li>
                <li id ="performa">
                    <span>Settings</span>
                </li>
        </div>

    </div>
  );
};

export default Sidebar;
