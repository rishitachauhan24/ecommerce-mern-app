import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();

export const useCart = () => {

  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      let updatedCartItems;
      if (existingItem) {
        updatedCartItems = state.cartItems.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
      }

      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return { ...state, cartItems: updatedCartItems };
    }

    case 'REMOVE_FROM_CART': {
      const updatedCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return { ...state, cartItems: updatedCartItems };
    }

    case 'UPDATE_QUANTITY': {
      const updatedCartItems = state.cartItems.map((item) =>
        item._id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return { ...state, cartItems: updatedCartItems };
    }

    case 'CLEAR_CART': {
      localStorage.removeItem('cartItems');
      return { ...state, cartItems: [] };
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    toast.info('Item removed from cart', {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast.info('Cart cleared', {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const getTotalAmount = () => {
    return state.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return state.cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cartItems: state.cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalAmount,
    getTotalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};