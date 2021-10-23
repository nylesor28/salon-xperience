import react from "react";
// import FlashcardList from "../components/FlaschcardList.js";
// import Flashcard from "../components/Flashcard";
import React, { useState, useEffect } from 'react';
import "../App.css";
// import axios from "axios";
// import ProductList from "../components/ProductList";
// import Cart from "../components/Cart";
import spinner from '../assets/spinner.gif';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';


function Pricing(props) {
    // const[flashcards, setFlashcards]=useState(Flashcards)
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();
  
    const [currentProduct, setCurrentProduct] = useState({});
  
    const { loading, data } = useQuery(QUERY_PRODUCTS);
  
    const { products, cart } = state;
  
    useEffect(() => {
      // already in global store
      if (products.length) {
        setCurrentProduct(products.find((product) => product._id === id));
      }
      // retrieved from server
      else if (data) {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: data.products,
        });
  
        data.products.forEach((product) => {
          idbPromise('products', 'put', product);
        });
      }
      // get cache from idb
      else if (!loading) {
        idbPromise('products', 'get').then((indexedProducts) => {
          dispatch({
            type: UPDATE_PRODUCTS,
            products: indexedProducts,
          });
        });
      }
    }, [products, data, loading, dispatch, id]);
  
    const addToCart = () => {
      const itemInCart = cart.find((cartItem) => cartItem._id === id);
      if (itemInCart) {
        dispatch({
          type: UPDATE_CART_QUANTITY,
          _id: id,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
        });
        idbPromise('cart', 'put', {
          ...itemInCart,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
        });
      } else {
        dispatch({
          type: ADD_TO_CART,
          product: { ...currentProduct, purchaseQuantity: 1 },
        });
        idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
      }
    };
  
    const removeFromCart = () => {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: currentProduct._id,
      });
  
      idbPromise('cart', 'delete', { ...currentProduct });
    };
    return (
        <>
          {currentProduct && cart ? (
            <div className="container my-1">
              <Link to="/">← Back to Products</Link>
    
              <h2>{currentProduct.name}</h2>
    
              <p>{currentProduct.description}</p>
    
              <p>
                <strong>Price:</strong>${currentProduct.price}{' '}
                <button onClick={addToCart}>Add to Cart</button>
                <button
                  disabled={!cart.find((p) => p._id === currentProduct._id)}
                  onClick={removeFromCart}
                >
                  Remove from Cart
                </button>
              </p>
    
              <img
                src={`/images/${currentProduct.image}`}
                alt={currentProduct.name}
              />
            </div>
          ) : null}
          {loading ? <img src={spinner} alt="loading" /> : null}
          <Cart />
        </>
      );
    }
//   return (
//       <div className="container">
//       {/* <FlashcardList flashcards={flashcards} /> */}
//       <ProductList/>
//       {/* <Cart/>  */}
//       </div>
 
//   );
// }
// const Flashcards=[{
//     id: 0,
//     service:"Custom Color",
//     description: "Single Process",
//     price:"$65",
// },
// {
//     id: 2,
//     service:"Blow Dry & Styling",
//     description:"Updo",
//     price:"$65",
// },
// {
//     id: 3,
//     service:"Blow Dry & Styling",
//     description: "Formal Blow Dry",
//     price: "$60",
// },
// {
//     id: 4,
//     service:"Blow Dry & Styling",
//     description: "Casual Blow Dry",
//     price:"$50",
// },
// {
//     id: 5,
//     service:"Hydrating Treatment",
//     description: "Hair & Scalp Treatment",
//     price:"$20",
// },
// {
//     id: 6,
//     service:"Protein Treatment",
//     description: "Hair & Scalp Treatment",
//     price:"$20",
// },
// {
//     id: 7,
//     service:"Scalp Treatment",
//     description: "Hair & Scalp Treatment",
//     price:"$30",
// },
// {
//     id: 8,
//     service:"Strengthening Treatment",
//     description: "Hair & Scalp Treatment",
//     price:"$35",
// },
// {
//     id: 9,
//     service:"Brazilian Blowout",
//     description: "Smoothing Treatments",
//     price:"$235",
// },
// {
//     id: 10,
//     service:"Relaxers",
//     description: "Keratin Treatment",
//     price:"$250",
// },
// {
//     id: 11,
//     service:"Perm",
//     description: "Keratin Treatment",
//     price:"$250",
// },
// {
//     id: 12,
//     service:"Gents Haircuts",
//     description: "Hair & Scalp Treatment",
//     price:"$35",
// },
// {
//     id: 13,
//     service:"Ladies Haircuts",
//     description: "Hair & Scalp Treatment",
//     price:"$45",
// },
// {
//     id: 15,
//     service:"Youth Haircuts",
//     description: "Hair & Scalp Treatment",
//     price:"$25",
// },
// {
//     id: 16,
//     service:"Gents Full Service Haircuts",
//     description: "The Gentlemen will receive a wash and steam",
//     price:"$40",
// },
// {
//     id: 17,
//     service:"Gents Color Treatment",
//     description: "Enhance the natural color of your hair or add some flair",
//     price:"$50",
// },
// {
//     id: 18,
//     service:"The ulitmate identity",
//     description: "The gentlemen will receive a hair cut, dye, and beard treatment",
//     price:"$65",
// },
// {
//     id: 19,
//     service:"Box Braids",
//     description: "Single Braids",
//     price:"$180",
// },
// {
//     id: 20,
//     service:"Crochet Braids",
//     description: "Protective Styling",
//     price:"$120",
// },
// {
//     id: 21,
//     service:"Hair Enhancement",
//     description: "Extensions",
//     price:"$275",
// },
// {
//     id: 20,
//     service:"Hydrating Treatment",
//     description: "Hair & Scalp Treatment",
//     price:"$20 plus",
// },
// {
//     id: 20,
//     service:"Hydrating Treatment",
//     description: "Hair & Scalp Treatment",
//     price:"$20 plus",
// },
// {
//     id: 20,
//     service:"Hydrating Treatment",
//     description: "Hair & Scalp Treatment",
//     price:"$20 plus",
// },
// {
//     id: 20,
//     service:"Hydrating Treatment",
//     description: "Hair & Scalp Treatment",
//     price:"$20 plus",
// }
// ]
export default Pricing;