import React, { useState } from "react";
import {
  FaUserAlt,
  FaCommentAlt,
  FaLock,
  FaHome,
  FaUnlock,
  FaProductHunt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import "../Drawer/side1.css";

const useStyles = makeStyles((theme) => ({
  body: {
    margin: 0,
    //fontFamily: "Arial, sans-serif",
  },
  dashboardContainer: {
    // height:"100vh",
    // width:"100vw",
    display:"flex"
  },
  menuBar: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 15,
    textAlign: "center",
    minWidth: 200,
    height: 698,
  },
  sidebar: {
    background: "black",
    color: "#fff",
    height: "100vh",
    
    transition: "all 0.5s",
    padding: 15,
    textAlign: "center",
  },
  menuBtn: {
    cursor: "pointer",
    display: "block",
  },
  navMenu: {
    display: "block",
  },
  mainContent: {
    flexGrow: 1,
   // padding: 15,
  },

  "*": {
    margin: 0,
    padding: 0,
    textDecoration: "none",
  },
  container: {
    display: "flex",
  },
  main: {
    height:"100vh",
    overflowY:"scroll",
    // width:"90vw",
    padding: 20,
  
  },
  topSection: {
    display: "flex",
    alignItems: "center",
    padding: "20px 5px",
  },
  logo1: {
    fontSize: 40,
    marginLeft: 10,
  },
  bars: {
    display: "flex",
    fontSize: 20,
    marginLeft: 30,
  },
  link: {
    display: "flex",
    color: "#ffffff",
    padding: "10px 15px",
    gap: 15,
    transition: "all 0.5s",
    "&:hover": {
      background: "rgba(209, 31, 31, 0.851)",
      color: "#f6f6f6",
      transition: "all 0.5s",
    },
  },
  link1: {
    display: "flex",
    background: "rgba(209, 31, 31, 0.851)",
    color: "#fff",
    padding: "10px 15px",
    gap: 15,
    transition: "all 0.5s",
    "&:hover": {
      background: "rgba(209, 31, 31, 0.346)",
      color: "#f6f6f6",
      transition: "all 0.5s",
    },
  },
  link2: {
    display: "flex",
    background: "rgba(41, 103, 235, 0.851)",
    color: "#fff",
    padding: "10px 15px",
    gap: 15,
    transition: "all 0.5s",
    "&:hover": {
      background: "rgba(41, 102, 235, 0.303)",
      color: "#f6f6f6",
      transition: "all 0.5s",
    },
  },
  active: {
    background: "rgba(59, 132, 178, 0.868)",
    color: "#ff0606d5",
  },
  icon: {
    fontSize: 25,
  },
  linkText: {
    fontSize: 20,
  },

  "@media only screen and (max-width: 800px)": {
    sidebar: {
      minWidth: "50px",
    },
    menuBtn: {
      display: "block",
      cursor: "pointer",
    },
    linkText: {
      display: "block",
      fontSize: 0,
    },
    logo1: {
      display: "block",
      fontSize: 0,
    },
    active: {
      display: "block",
    },
  },
}));

export const SideNav = ({ children }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaProductHunt />,
    },
    {
      path: "/About",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/Contact",
      name: "Contact",
      icon: <FaCommentAlt />,
    },

    {
      path: "/Login",
      name: "Login",
      icon: <FaUnlock />,
    },
    {
      path: "/Logout",
      name: "Logout",
      icon: <FaLock />,
    },
  ];
  return (
    <div className={classes.dashboardContainer}>
      <div className="sidebar bg-dark">
        <div className={classes.topSection}>
          <div
            style={{ marginLeft: isOpen ? "4px" : "-5px" }}
            className={classes.menuBtn}
          >
            <img
              src="image/Capermint.png"
              alt="Logo"
              width={50}
              onClick={toggle}
            />
          </div>

          <h1
            style={{ display: isOpen ? "flex" : "none" }}
            className={classes.logo1}
          >
            Capermint
          </h1>
        </div>
        {/* <nav className="nav-menu"> 
                <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/Contact">Contact</a></li>
                        <li><a href="/Login">Login</a></li>
                        <li><a href="/Logout">Logout</a></li>
                    </ul> */}
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={classes.link}
            activeclassName={classes.active}
          >
            <div className={classes.icon}>{item.icon}</div>
            <div
              style={{ display: isOpen ? "flex" : "none" }}
              className={classes.linkText}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>

      <div className={classes.mainContent}>
        <main className={classes.main}>  {children}</main>
      </div>
    </div>
  );
};
