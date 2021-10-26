import React, { useState, useEffect } from 'react';
import spinner from '../assets/spinner.gif';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_MERCHANDISES,
} from '../utils/actions';
import { QUERY_MERCHANDISES } from '../utils/queries';
import { idbPromise } from '../utils/helpers';


function Detail() {
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();
  
    const [currentMerchandise, setCurrentMerchandise] = useState({});
  
    const { loading, data } = useQuery(QUERY_MERCHANDISES);
  
    const { merchandises, cart } = state;
  
    useEffect(() => {
      // already in global store
      if (merchandises.length) {
        setCurrentMerchandise(merchandises.find((merchandise) => merchandise._id === id));
      }
      // retrieved from server
      else if (data) {
        dispatch({
          type: UPDATE_MERCHANDISES,
          merchandises: data.merchandises,
        });
  
        data.merchandises.forEach((merchandise) => {
          idbPromise('merchandises', 'put', merchandise);
        });
      }
      // get cache from idb
      else if (!loading) {
        idbPromise('merchandises', 'get').then((indexedMerchandises) => {
          dispatch({
            type: UPDATE_MERCHANDISES,
            merchandises: indexedMerchandises,
          });
        });
      }
    }, [merchandises, data, loading, dispatch, id]);
  
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
          merchandise: { ...currentMerchandise, purchaseQuantity: 1 },
        });
        idbPromise('cart', 'put', { ...currentMerchandise, purchaseQuantity: 1 });
      }
    };
  
    const removeFromCart = () => {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: currentMerchandise._id,
      });
  
      idbPromise('cart', 'delete', { ...currentMerchandise });
    };
    return (
        <>
          {currentMerchandise && cart ? (
            <div className="container my-1">
              <Link to="/">← Back to merchandises</Link>
    
              <h2>{currentMerchandise.name}</h2>
    
              <p>{currentMerchandise.description}</p>
    
              <p>
                <strong>Price:</strong>${currentMerchandise.price}{' '}
                <button onClick={addToCart}>Add to Cart</button>
                <button
                  disabled={!cart.find((p) => p._id === currentMerchandise._id)}
                  onClick={removeFromCart}
                >
                  Remove from Cart
                </button>
              </p>
    
              <img
                src={`/images/${currentMerchandise.image}`}
                alt={currentMerchandise.name}
              />
            </div>
          ) : null}
          {loading ? <img src={spinner} alt="loading" /> : null}
          <Cart />
        </>
      );
    }
    export default Detail