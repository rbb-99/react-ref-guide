//store is the convention as we store the application wide state
//manage overall cart data through context 'cause we need it in different places of the application;
//on meal items as well as the cart we need to update the cart items
import React from "react";

//initialize the context with some default data which will not be used but gives better autocomplete
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
