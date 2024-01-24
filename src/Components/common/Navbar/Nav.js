import React, { useState } from 'react'
import { FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import "./Nav.css";

function Nav() {
    const [showMidea, setshowMidea] = useState(false);

    const logout =()=>{
        localStorage.removeItem('login');
        navigate('/login');
    }

    const navigate = useNavigate();

    return (
        <div>
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        <span>C</span>apermintt

                    </h2>
                </div>
                <div className={showMidea ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            {/* <a href="about">About</a> */}
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="social">
                    <ul className="social-desktop">
                        <li>
                            <button className="btn btn-info btn-lg"><Link to="/login">Login</Link></button>
                            <button className="btn btn-danger btn-lg m-5" onClick={logout}>Logout</button>
                            {/* <a href="https://www.youtube.com/">
                                <FaYoutube className="youtube" />
                            </a> */}
                        </li>
                        
                    </ul>
                    
                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setshowMidea(!showMidea)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>

            </nav>





            {/* 
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li></li>
            </ul> */}
        </div>
    )
}

export default Nav
