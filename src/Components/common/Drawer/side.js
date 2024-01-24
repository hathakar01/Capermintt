import React, { useState } from "react";
import "./side.css";
import {
  FaTh,
  FaUserAlt,
  FaLock,
  FaUnlock,
  FaRegClipboard,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const SideNav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Harshal",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaRegClipboard />,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <FaUserAlt />,
    },
  ];

  return (
    <div>
      <div className="dashboard-container">
        <div
          style={{ width: isOpen ? "250px" : "55px" }}
          className="menu-bar bg-dark "
        >
          <div className="top_section">
            <div
              style={{ marginLeft: isOpen ? "4px" : "-5px" }}
              className="menu-btn"
            >
              <img
                src="Image/Capermint.png"
                alt=""
                onClick={toggle}
                style={{ width: 40 }}
              ></img>
            </div>
            <h1
              style={{ display: isOpen ? "block" : "none" }}
              className="logo1"
            >
              Capermint
            </h1>
          </div>

          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <div className="main-content">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};
