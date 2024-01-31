import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("login"));
    //console.log(login);

    if (!login) {
      navigate("/login");
    }else if (!(login.username === "Harshal" && login.password === "0101")) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
};

// useEffect(() => {

//   let login = localStorage.getItem('login');

//   console.log(login, 'login')
//   if(!login?.name === "Test" && !login?.age === 30){
//     navigate("/login");
//   }
//   // if (!login) {
//   //   navigate("/login");
//   // }
// });
