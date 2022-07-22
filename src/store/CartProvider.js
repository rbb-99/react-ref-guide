// This component's goal is simply to manage the cart context data
// and to provide that context to al components that want access to it.
import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  //this will be a helper function which holds the
  //actual values which will change throughout application

  const addItemCartHandler = (item) => {};

  const removeItemCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
  //now this cart provider component can wrap any components that need access to the cart
};

export default CartProvider;
