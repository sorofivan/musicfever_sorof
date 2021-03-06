import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../context/CartProvider";

const CartWidget = () => {
  const { items } = useContext(CartContext);

  let cartWidgetCount = 0;

  items.map((item) => {
    cartWidgetCount = cartWidgetCount + item.quantity;
    return cartWidgetCount;
  });

  return (
    <>
      {items.length > 0 && (
        <div className="d-flex">
          <Link to="/cart" className="p-2">
            <AiOutlineShoppingCart size="1.8rem" color="#f8f9fa" />
          </Link>
          <p className="text-warning">{cartWidgetCount}</p>
        </div>
      )}
    </>
  );
};

export default CartWidget;
