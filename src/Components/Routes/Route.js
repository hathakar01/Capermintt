import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "../templates/About/About";
import Contact from "../templates/Contact/Contact";
import { Login } from "../templates/Login/Login";
import { Logout } from "../templates/Login/Logout";
import { Protected } from "../common/Protected";
import Sidebar from "../common/Drawer/Slidebar";
import Home from "../templates/Home/Home";
import { Navbar } from "../common/Drawer/Navbar";
import { SideNav } from "../common/Drawer/side";



export const Routeall = () => {
  return (
    <div>
      <BrowserRouter>
        <SideNav>
        {/* <Navbar/> */}
        {/* <Sidebar> */}
          <Routes>
            <Route path="/" element={<Protected Component={Home}/>} />
            <Route path="/about" element={<Protected Component={About}/>} />
            <Route
              path="/contact"
              element={<Protected Component={Contact}/>}
            />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Protected Component={Logout}/>} />
          </Routes>
          </SideNav>
        {/* </Sidebar>   */}
      </BrowserRouter>
    </div>
  );
};
