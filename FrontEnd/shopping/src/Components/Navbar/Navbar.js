import React, { useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Navbar-style.css"
const Navigation = () => {
  const [login,setModelogin]=useState({display:true,none:false});
  const[sign,setsign]=useState({display:true,none:false})
  const { token } = useContext(UserContext);
  return (
    <>
      <div className="navbar">
        <img src="https://www.360webdesigns.com/wp-content/uploads/2016/07/Services_ECommerce_v2-01.png"/>
        <h2>Shopping App</h2>
        <div className="buttons-nav">
        <Link to="/Products" className="link">Products</Link>
        <Link to="/Contact-Us" className="link">Contact-US</Link>
        <Link to="/About-us" className="link">About-Us</Link>
        <Link to="/sign" className={`${login.display?"sign-up-display":"sign-up-none"}`}onClick={()=>{
          setModelogin((login)=>{
            return{display:!login.display,none:!login.none}
          })
        }}>SignUp</Link>
        <Link to="/Login" className={`${sign.display?"Login-display":"login-none"}`} onClick={()=>{
          setsign((sign)=>{
            return{display:!sign.display,none:!sign.none}
          })
        }}>Login</Link>
       
        </div>
      </div>
    </>
  );
};

export default Navigation;
