import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();

  // useEffect(() => {
  //     let login = localStorage.getItem('login');
  //     if (login) {
  //       navigate('/')
  //     }
  //   },[]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const obj = {
    username: username,
    password: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    login(obj);
    console.log([obj]);
  };
  
   const login =(userData)=>{
   // alert("hyy")
       localStorage.setItem('login', JSON.stringify(userData) );
       navigate('/');
   }

  return (
    <div>
      <div className="d-flex justify-content-center align-item-center vh-100">
        <div
          className="bg-dark p-3 rounded-5 mt-5"
          style={{ height: "300px", width: "320px" }}
        >
          <h1 className="text-center text-danger">Login</h1>
          <hr></hr>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <h5 className="text-light">
                <strong>Email address</strong>
              </h5>
              <input
                type="text"
                autoComplete="off"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter email"
               onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <h5 className="text-light">
                <strong>Password</strong>
              </h5>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter password"
               onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid p-3">
              <button type="submit" className="btn btn-danger btn-lg w-100">
                Sign Up
              </button>
            </div>
            <br></br>
            <p className="forgot-password text-center text-white">
              Don't Have an Account?
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
