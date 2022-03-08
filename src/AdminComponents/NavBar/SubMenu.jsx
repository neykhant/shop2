import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const SubMenu = ({ item }) => {
  const [sub, setSub] = useState(false);

  const handleSub = () => {
    setSub(!sub);
};
// console.log("subuu", sub);

  //   console.log("itemsss", item.subNav);
  return (
    <div style={{ width: "100%" }}>
      <div>
        <li
          key={item.id}
          className={item.sName}
          onClick={item.subNav && handleSub}
        >
          <Link to={item.path} >
            {item.icon}
            <span>{item.title}</span>
            <div className="subNavitemOpenClose">
          {item.subNav && sub ? item.iconOpened : item.subNav ? item.iconClosed : null}
        </div>
          </Link>
          
        </li>
        
      </div>
      {sub &&
        item.subNav.map((it) => (
          <Link to={it.path} key={it.title} style={{ textDecoration: 'none'}}>
            <div className="subnav-item"> <span>{it.title}</span></div>
          </Link>
        ))}
    </div>
  );
};

export default SubMenu;
