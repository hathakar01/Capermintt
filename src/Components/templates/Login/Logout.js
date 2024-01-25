import React from 'react'
import { NavLink, Link, useNavigate } from "react-router-dom";

export const Logout = () => {

    const logout =()=>{
        localStorage.removeItem('login');
        navigate('/login');
    }

    const navigate = useNavigate();
    return (
        <div>
              <button className="btn btn-danger btn-lg m-5" onClick={logout}>Logout</button>
        </div>
    )
}