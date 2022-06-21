import React, { createContext, useState } from "react";
import { isInCart, unifyItems } from "../helpers";
export const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (isInCart(items, item)) {
      setItems(unifyItems(items, item));
      return;
    }
    setItems([...items, item]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const clearItems = () => {
    setItems([]);
  };

  const totalPrice = () => {
    const totalByItem = items.map((item) => {
      return item.price * item.quantity;
    });
    return totalByItem.reduce((a, b) => {
      return a + b;
    }, 0);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
