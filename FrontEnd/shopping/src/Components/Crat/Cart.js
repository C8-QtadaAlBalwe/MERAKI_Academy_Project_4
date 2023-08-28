import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import "./Cart-style.css";

const CartPage = () => {
  const { token, Cart, setCart } = useContext(UserContext);
  const getaAllCart=()=>{
    axios
        .get("http://localhost:5000/cart/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          setCart(result.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
  }
  useEffect(() => {
    getaAllCart()
  }, []);

  return (
    <>
      <div className="pageCart">
        {Cart &&
          Cart.map((pro, i) => {
            let total_1 = pro.price * pro.quantity;
            return (
              <>
                <div className="product-add">
                  <div className="imgProduct-2">
                    <img src={pro.img} />
                  </div>
                  <h1>{pro.nameProduct}</h1>
                  <h2>
                    price : <span>{pro.price}</span>
                  </h2>
                  <h2> Color : {pro.colors}</h2>
                  <h2> Size : {pro.size}</h2>
                  <p>Total : {total_1}</p>
                  <button
                    onClick={(e) => {
                      const User = pro._id;
                      axios
                        .delete(`http://localhost:5000/cart/${User}`, {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        })
                        .then((result) => {
                          getaAllCart()
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    Delete
                  </button>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
  
};

export default CartPage;
