import React from "react";
import "./navbar.scss";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navtitle">
          <h2>Dashboard</h2>
        </div>
        <div className="items">
          <div className="item">
            <AiOutlineSetting className="icon" />
            {/* <div className="counter">1</div> */}
          </div>
          <div className="item">
            <MdOutlineNotifications className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            {/* Admin */}
            <img src="assets/adminicon.svg" alt="" className="adminpic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
