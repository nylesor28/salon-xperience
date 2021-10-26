import React from "react";
import ProductList from "../components/ProductList";
import Merchandise from "../components/Merchandise";
import Cart from "../components/Cart";

const Pricing = () => {
  return (
    <div className="container">
      <Merchandise />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Pricing;