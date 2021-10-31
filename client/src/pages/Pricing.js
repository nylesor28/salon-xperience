import React from "react";
import Products from "../components/Products";
import Cart from "../components/Cart";
import ClientForm from "../components/ClientForm";


const Pricing = () => {
  return (
    <div className="Pricing">
      {
        Products.map((product)=> {
          return <div className="product" key={product.id}>
            <div className="product-content">
              <img src={product.image} alt=""/>
              <h1>{product.service}</h1>
              <a href="github.com" className="blog-link">
              </a>
              <div className="description-con">
                <p>{product.description}</p>
                <p>{product.price}</p>
                </div>
                {/* <button className="product-button"> Add to cart</button> 
                <button className="booking-button">Reservation</button>    */}
          </div>
</div>
        })
      }
      
    </div>
  );
};

export default Pricing;