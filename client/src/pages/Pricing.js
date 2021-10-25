import React from "react";
import ProductList from "../components/ProductList";
import Service from "../components/Service";
import Cart from "../components/Cart";

const Pricing = () => {
  return (
    <div className="container">
      <Service />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Pricing;