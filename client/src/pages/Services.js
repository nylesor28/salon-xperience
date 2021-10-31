import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import HairTypesCard from "../components/HairTypesCard";

const Services= () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
      <HairTypesCard />
    </div>
  );
};

export default Services;
