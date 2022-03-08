import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./NavBar.css";
import Button from "../Button/Button";
import { navItems } from "./NavBarItems.js";
import images from "./profile.png";
import SubMenu from "./SubMenu";

function Navbar() {
  // const [subnav, setSubnav] = useState(false);
  // const showSubnav = () => {
  //   setSubnav(true);
  // };
  // console.log("first", subnav);

  return (
    <>
      <div className="navBar">
        <div className="navBar_header">
          <Link to="/supplier" className="navBar-logo">
            ORGANIC NAIL SHOP
          </Link>
        </div>

        <div className="logo">
          <img src={images} alt="" />
          <span style={{ padding: 10, fontSize: 15 }}>Hello Brother</span>
        </div>
      </div>

      <div className="sidebar">
        <ul className="sidebar-items">
          {navItems.map((item) => {
            return (
              <SubMenu item={item} key={item.id} />
            );
          })}
        </ul>
        <Button />
      </div>
    </>
  );
}

//MyForm
export default Navbar;
