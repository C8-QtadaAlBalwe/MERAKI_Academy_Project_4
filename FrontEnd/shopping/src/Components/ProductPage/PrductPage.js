import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
import "./ProductPage-style.css";
const ProductPage = () => {
 // const [productId, setProductId] = useState("");
  //const [user, setUserId] = useState("");
  const { token } = useContext(UserContext);
  const [product, setProduct] = useState([]);
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
                    price<span>{pro.price}</span>
                  </h2>
                  <h2>
                    Size<span>{pro.size[0]}</span>
                    <span>{pro.size[1]}</span>
                  </h2>
                  <h2>
                    colors<span>{pro.colors[0]}</span>
                    <span>{pro.colors[1]}</span>
                  </h2>
                  <button
                    onClick={async (e) => {
                      //setProductId(pro._id);
                      //setUserId(pro.User);
                    
                      const user=pro.User
                      const productId =pro._id
                      console.log(user)
                      console.log(productId)
                      try{
                      const results = await axios.post(
                        "http://localhost:5000/cart/",
                        {user,productId}, { headers: {
                          Authorization: `Bearer ${token}`,
                        }},
                      );           
                      console.log(results);
                      }catch (error) {
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
