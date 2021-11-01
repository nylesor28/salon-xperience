import React from "react";
import Products from "../components/Products";
import Cart from "../components/Cart";
import ClientForm from "../components/ClientForm";

const Pricing = () => {
  return (
    <div className="Pricing">
      {Products.map((product) => {
        return (
          <div className="product bg-white rounded-md opacity-90" key={product.id}>
            <div className="product-content">
              <img src={product.image} className="border-2 p-1" alt="" />
              <h1 className="text-pink-500">{product.service}</h1>
              <a href="github.com" className="blog-link"></a>
              <div className="description-con border-2 m-2 rounded-md p-1 border-pink-500">
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
              {/* <button className="product-button"> Add to cart</button> 
                <button className="booking-button">Reservation</button>    */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pricing;
