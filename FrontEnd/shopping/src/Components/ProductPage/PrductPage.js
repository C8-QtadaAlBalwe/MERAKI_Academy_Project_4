import React, { useState, useEffect , useContext} from "react";
import axios from "axios";
import { UserContext } from "../../App";
import "./ProductPage-style.css"
const ProductPage = () => {
  const {token}=useContext(UserContext);
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
  });

  return (
    <>
      <div className="pageProduct">
        {product &&
          product.map((pro, i) => {
            return (
              <>
                <div className="product">
                    <div className="imgProduct"><img src={pro.ImgSrc}/></div>
                    <h1>{pro.nameProduct}</h1>
                    <h2>Size<span>{pro.size}</span></h2>
                    <h2>colors<span>{pro.colors}</span></h2>
                    <button>buy</button>
                </div>
              </>
            );

          })}
      </div>
    </>
  );
};

export default ProductPage
