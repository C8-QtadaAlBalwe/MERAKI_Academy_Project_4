import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import { UserContext } from "../../App";
import "./ProductPage-style.css";
const ProductPage = () => {
  const { token } = useContext(UserContext);
  const [product, setProduct] = useState([]);
  const [colors, setColors] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
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
      <div className="pageProduct">
        {product &&
          product.map((pro, i) => {
            return (
              <>
                <div className="product">
                  <div className="imgProduct">
                    <img src={pro.ImgSrc} />
                  </div>
                  <h1>{pro.nameProduct}</h1>
                  <h2>
                    price<span>{pro.price} $</span>
                  </h2>
                  <h2>Size</h2>
                  <button
                    onClick={(e) => {
                      setSize(e.target.value);
                    }}
                  >
                    {pro.size[0]}
                  </button>
                  <button
                    onClick={(e) => {
                      setSize(e.target.value);
                    }}
                  >
                    {pro.size[1]}
                  </button>
                  <button
                    onClick={(e) => {
                      setSize(e.target.value);
                    }}
                  >
                    {pro.size[2]}
                  </button>
                  <h2>colors</h2>
                  <button
                    onClick={(e) => {
                      setColors(e.target.value);
                    }}
                  >
                    {pro.colors[0]}
                  </button>
                  <button
                    onClick={(e) => {
                      setColors(e.target.value);
                    }}
                  >
                    {pro.colors[1]}
                  </button>
                  <button
                    onClick={(e) => {
                      setColors(e.target.value);
                    }}
                  >
                    {pro.colors[2]}
                  </button>
                  <input
                    type="number"
                    placeholder="quantity"
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  />

                  <button
                    onClick={ () => {
                      const nameProduct = pro.nameProduct;
                      const img = pro.ImgSrc;
                      const price = pro.price;
                      try {
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
                            console.log(results);
                          });
                      } catch (error) {
                        console.log(error);
                      }
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
