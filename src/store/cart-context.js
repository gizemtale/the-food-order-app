import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
}); // initial valueyu kullanmicaz ama bize auto-completion saglicak

export default CartContext;
