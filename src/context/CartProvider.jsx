import React, { createContext, useState } from "react";
export const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const isInCart = (id) => {
    const foundItem = items.find((item) => item.id === Number(id));
    return foundItem;
  };

  const addItem = (item, quantity) => {
    isInCart(item.id)
      ? setItems(
          items.map((element) => {
            if (element.id === item.id) {
              element.quantity += quantity;
            }
            return element;
          })
        )
      : setItems([
          ...items,
          {
            id: item.id,
            brand: item.brand,
            model: item.model,
            price: item.price,
            quantity: quantity,
          },
        ]);
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
