
import React, { useState } from 'react';
import {
    FaUserAlt,
    FaCommentAlt,
    FaLock,
    FaHome,
    FaUnlock
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./side.css";

export const SideNav = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/About",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            path: "/Contact",
            name: "Contact",
            icon: <FaCommentAlt />
        },
        {
            path: "/Login",
            name: "Login",
            icon: <FaUnlock />
        },
        {
            path: "/Logout",
            name: "Logout",
            icon: <FaLock />
        }
    ]
    return (
        <div className="dashboard-container">
            <div style={{ width: isOpen ? "300px" : "90px" }} className="menu-bar">
                <div className="top_section">
                    <div style={{ marginLeft: isOpen ? "4px" : "-5px" }} className="menu-btn">
                        <img src="image/Capermint.png" alt="Logo" width={50} onClick={toggle} />
                    </div>
            
                        <h1 style={{ display: isOpen ? "flex" : "block" }} className="logo1">Capermint</h1>
                        
                    
                </div>
                {/* <nav className="nav-menu"> 
                <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/Contact">Contact</a></li>
                        <li><a href="/Login">Login</a></li>
                        <li><a href="/Logout">Logout</a></li>
                    </ul> */}
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "flex" : "block" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
               
            </div>

            <div className="main-content">
                <main>{children}</main>
            </div>
        </div>
    )
}
























// import React, { useState } from "react";
// import "./side.css";
// import {
//   FaTh,
//   FaUserAlt,
//   FaLock,
//   FaUnlock,
//   FaRegClipboard,
// } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// export const SideNav = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const menuItem = [
//     {
//       path: "/",
//       name: "Harshal",
//       icon: <FaTh />,
//     },
//     {
//       path: "/about",
//       name: "About",
//       icon: <FaRegClipboard />,
//     },
//     {
//       path: "/contact",
//       name: "Contact",
//       icon: <FaUserAlt />,
//     },
//   ];

//   return (
//     <div>
//       <div className="dashboard-container">
//         <div
//           style={{ width: isOpen ? "250px" : "55px" }}
//           className="menu-bar bg-dark "
//         >
//           <div className="top_section">
//             <div
//               style={{ marginLeft: isOpen ? "4px" : "-5px" }}
//               className="menu-btn"
//             >
//               <img
//                 src="Image/Capermint.png"
//                 alt=""
//                 onClick={toggle}
//                 style={{ width: 40 }}
//               ></img>
//             </div>
//             <h1
//               style={{ display: isOpen ? "block" : "none" }}
//               className="logo1"
//             >
//               Capermint
//             </h1>
//           </div>

//           {menuItem.map((item, index) => (
//             <NavLink
//               to={item.path}
//               key={index}
//               className="link"
//               activeclassName="active"
//             >
//               <div className="icon">{item.icon}</div>
//               <div
//                 style={{ display: isOpen ? "block" : "none" }}
//                 className="link_text"
//               >
//                 {item.name}
//               </div>
//             </NavLink>
//           ))}
//         </div>
//         <div className="main-content">
//           <main>{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// };
