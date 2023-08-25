import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import "./Cart-style.css";
const CartPage = () => {
  const { token } = useContext(UserContext);
  const [Cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/cart/",{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result);
        setCart(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="pageCart">
     <h1>Cart</h1>     
      </div>
    </>
  );
};

export default CartPage;
