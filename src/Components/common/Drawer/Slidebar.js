import React, { useState } from "react";
import {
  FaTh,
  FaUserAlt,
  FaLock,
  FaUnlock,
  FaRegClipboard
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("login");
    navigate("/login");
  };
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
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
    // {
    //   path: "/login",
    //   name: "Login",
    //   icon: <FaLock />,
    // },
    // {
    //   path: "/logout",
    //   name: "Logout",
    //   icon: <FaUnlock />,
    // },
  ];
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ width: isOpen ? "250px" : "55px" }}
        className="sidebar bg-dark"
      >
        <div className="top_section">
          <div style={{ marginLeft: isOpen ? "4px" : "-5px" }} className="bars">
            {/* <FaBars onClick={toggle}/> */}
            <img
              src="Image/Capermint.png"
              alt=""
              onClick={toggle}
              style={{ width: 40 }}
            ></img>
            <h1
              style={{ display: isOpen ? "block" : "none" }}
              className="logo1"
            >
              Capermintt
            </h1>
          </div>
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
        <div className="icon" >
          <div
            style={{ display: isOpen ? "block" : "none", marginTop:"500px"}}
           
          >
            <NavLink className="link1" to="/login">
              <FaLock />
              Login
            </NavLink>
            <NavLink className="link2" to="/logout">
              <FaUnlock />
              Logout
            </NavLink>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
