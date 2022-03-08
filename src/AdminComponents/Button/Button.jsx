import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import * as IconsMD from "react-icons/md";
import "./Button.css";


function Button() {
  return (
    <>
      <Link to="/logout">
        <button className="btn">          
          <IconsMD.MdLogout/>
          <span>Logout</span>
        </button>
      </Link>
    </>
  );
}

export default Button;
