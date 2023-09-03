import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import "./Cart-style.css";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const navigate = useNavigate();
  const { token, Cart, setCart } = useContext(UserContext);
  const [DisHid, setDisHid] = useState("massege-sure-hidden")
  const [sure, setSure] = useState("")
  const [ userID ,setUserID]=useState("")
  const getaAllCart = () => {
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
      <div className={`${DisHid}`}>
        <p>Are you sure to Delete this Product.</p>
        <button  onClick={(e) => {
          setDisHid("massege-sure-hidden")
          setSure(true)
          console.log("hello")
          axios
          .delete(`http://localhost:5000/cart/${userID}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((result) => {
            console.log(result)
            getaAllCart()
          })
          .catch((err) => {
            console.log(err);
          });
        }}>yes</button>
        <button  onClick={(e) => {
          setDisHid("massege-sure-hidden")
          setSure(false)
          navigate("/Cart")
        }}>NO</button>
      </div>
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
                    price : <span>{pro.price} $</span>
                  </h2>
                  <h2> Color : {pro.colors}</h2>
                  <h2> Size : {pro.size}</h2>
                  <p>Total : {total_1} $</p>
                  <button
                    onClick={(e) => {
                      setUserID(pro._id)
                      setDisHid("massage-sure-display")
                     
                       
                      
      
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
