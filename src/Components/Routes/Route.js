import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from "../templates/About/About";
import Contact from "../templates/Contact/Contact";
import { Login } from "../templates/Login/Login";
import { Logout } from "../templates/Login/Logout";
import { Protected } from "../common/Protected";
import Home from "../templates/Home/Home";
import { SideNav } from "../common/side";
import { Products } from "../common/Products";
import { ProductDetails } from "../common/ProductDetails";
import AddCart from "../common/AddCart";
import { AdminProductPage } from "../templates/Admin/AdminProductPage";



export const Routeall = () => {

  let login = JSON.parse(localStorage.getItem("login"));
  console.log(login , '01')
  return (



    <>
      <BrowserRouter>
        <SideNav>
        {/* <Navbar/> */}
        {/* <Sidebar> */}
          <Routes>
            <Route path="/" element={<Protected Component={Home}/>} />
            <Route path="/product" element={<Protected Component={Products}/>} />
            <Route path="/admin" element={<Protected Component={AdminProductPage}/>} />
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="/cart/:id" element={<AddCart/>} />
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
    </>
  );
};
