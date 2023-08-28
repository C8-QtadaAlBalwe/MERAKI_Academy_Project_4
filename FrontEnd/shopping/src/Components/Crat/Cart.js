import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import "./Cart-style.css";
const CartPage = () => {
  const { token } = useContext(UserContext);
  const [Cart, setCart] = useState([]);
  const [total, setTotal] = useState("")
  useEffect(() => {
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
  }, []);

  return (
    <>
      <div className="pageCart">
        {Cart &&
          Cart.map((pro, i) => {
            return (
              <>
                <div className="product-add">
                  <div className="imgProduct">
                    <img src={pro.img}/>
                  </div>
                  <h1>{pro.nameProduct}</h1>
                  <h2>
                    price  :  <span>{pro.price}</span>
                  </h2>
                  <h2>{pro.colors}</h2>
                  <h2>{pro.size}</h2>
                  {setTotal(pro.price * pro.quantity)}
                  <p>Total : {total}</p>
                  <button>Delete</button>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
};

export default CartPage;
