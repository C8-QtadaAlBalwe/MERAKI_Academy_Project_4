import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "./Navbar-style.css";
const Navigation = () => {
  const navigate = useNavigate();
  const [login, setModelogin] = useState({ display: true, none: false });
  const [sign, setsign] = useState({ display: true, none: false });
  const { token, firstName, setToken, setCart } = useContext(UserContext);

  return (
    <>
      <div className="navbar">
        <img src="https://www.360webdesigns.com/wp-content/uploads/2016/07/Services_ECommerce_v2-01.png" />
        <h2>Shopping App</h2>
        <div className="buttons-nav">
          <Link to="/Contact-Us" className="link">
            Contact-US
          </Link>
          <Link to="/About-us" className="link">
            About-Us
          </Link>
          {token ? (
            <div className="divs-Bar">
              <h1>
              {firstName}
                <Link to="/Profile"><img src="https://th.bing.com/th/id/R.07f6ad0ebaf84692e878826636c382c6?rik=29AibLxrmjAADg&pid=ImgRaw&r=0" /></Link>
                
              </h1>
             
              <Link to="/Products" className="link">
                Products
              </Link>
              <Link to="/Cart" className="link">
                Shopping 
              </Link>
              <button
                className="button-logout"
                onClick={() => {
                  localStorage.clear();
                  setToken("");
                  setCart([]);
                  navigate("/sign");
                }}
                
              >
                Logout
              </button>
              
            </div>
          ) : (
            <div className="divs-Bar">
              <Link
                to="/sign"
                className={`${
                  login.display ? "sign-up-display" : "sign-up-none"
                }`}
                onClick={() => {
                  setModelogin((login) => {
                    return { display: !login.display, none: !login.none };
                  });
                }}
              >
                SignUp
              </Link>
              <Link
                to="/Login"
                className={`${sign.display ? "Login-display" : "login-none"}`}
                onClick={() => {
                  setsign((sign) => {
                    return { display: !sign.display, none: !sign.none };
                  });
                }}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
