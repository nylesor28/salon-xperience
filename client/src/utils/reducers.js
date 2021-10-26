import { useReducer } from "react";
import {
  UPDATE_MERCHANDISES,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_AMENITIES,
  UPDATE_CURRENT_AMENITY,
  CLEAR_CART,
  TOGGLE_CART
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MERCHANDISES:
      return {
        ...state,
        merchandises: [...action.merchandises],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.merchandise],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.merchandises],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(merchandise => {
          if (action._id === merchandise._id) {
            merchandise.purchaseQuantity = action.purchaseQuantity
          }
          return merchandise
        })
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(merchandise => {
        return merchandise._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    case UPDATE_AMENITIES:
      return {
        ...state,
        amenities: [...action.amenities],
      };

    case UPDATE_CURRENT_AMENITY:
      return {
        ...state,
        currentAmenity: action.currentAmenity
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}