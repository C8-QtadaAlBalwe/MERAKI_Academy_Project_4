import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import "./ProductPage-style.css";
import { useNavigate } from "react-router-dom";
const ProductPage = () => {
  const navigate = useNavigate();
  const { token } = useContext(UserContext);
  const [product, setProduct] = useState([]);
  const [colors, setColors] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [mode,setMode]=useState({display:true , none:false})
  useEffect(() => {
    axios
      .get("http://localhost:5000/product/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result);
        setProduct(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <div className="search">
    <input type="text" placeholder="Search By Name"/>
    <button>Search</button>
    </div>
      <div className="pageProduct">
        {product &&
          product.map((pro, i) => {
            return (
              <>
                <div className="product-item">
                  <div className={`${
                  mode.display ? "imgProduct" : "imgProduct-none"
                }`} onClick={() => {
                  setMode((mode) => {
                    return { display: !mode.display, none: !mode.none };
                  });
                }}>
                  <img src={pro.ImgSrc} />
                  </div>
                  <h1>{pro.nameProduct}</h1>
                  <h2>
                    price : <span>{pro.price} $</span>
                  </h2>
                  
                  <h2>Size</h2>
                  <button value={pro.size[0]}
                    onClick={(e) => {
                      setSize(e.target.value);
                    }}
                  >
                    {pro.size[0]}
                  </button>
                  <button value={pro.size[1]}
                    onClick={(e) => {
                      setSize(e.target.value);
                    }}
                  >
                    {pro.size[1]}
                  </button>
                  <button value={pro.size[2]}
                    onClick={(e) => {
                      setSize(e.target.value);
                    }}
                  >
                    {pro.size[2]}
                  </button>
                  <h2>colors</h2>
                  <button value={pro.colors[0]}
                    onClick={(e) => {
                      setColors(e.target.value);
                    }}
                  >
                    {pro.colors[0]}
                  </button>
                  <button value={pro.colors[1]}
                    onClick={(e) => {
                      setColors(e.target.value);
                    }}
                  >
                    {pro.colors[1]}
                  </button>
                  <button value={pro.colors[2]}
                    onClick={(e) => {
                      setColors(e.target.value);
                    }}
                  >
                    {pro.colors[2]}
                  </button>
                  <div className="line"></div>
                  <input
                    type="number"
                    placeholder="quantity"
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  />

                  <button  className="buy-button"
                    onClick={(e) => {
                      const nameProduct = pro.nameProduct;
                      const img = pro.ImgSrc;
                      const price = pro.price;
                  
                          axios
                          .post(
                            "http://localhost:5000/cart/",
                            { colors, size, quantity, price, nameProduct, img },
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }
                          )
                          .then((results) => {


                            
                            navigate("/Cart")
                          })
                          
                      .catch((err)=>{
                        console.log(err)
                      })
                    }}
                  >
                    buy
                  </button>
                  
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default ProductPage;
