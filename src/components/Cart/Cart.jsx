import React, { useContext } from "react";
import { CartContext } from "../CartProvider/CartProvider";
import { BsTrash } from "react-icons/bs";

const Cart = () => {
  const { items, removeItem, clearItems } = useContext(CartContext);

  return (
    <div className="my-5">
      {items.length > 0 ? (
        items.map((item) => (
          <div className="d-flex justify-content-center my-2" key={item.id}>
            <h5 className="mx-2">
              {item.brand} {item.model}: ${item.price} x{item.quantity}
            </h5>
            <BsTrash
              style={{ margin: 6, color: "#f00", cursor: "pointer" }}
              onClick={() => removeItem(item.id)}
            />
          </div>
        ))
      ) : (
        <h1 style={{ margin: 200 }}>Empty Cart</h1>
      )}
      {items.length > 0 ? (
        <button
          type="button"
          className="btn btn-danger text-uppercase my-4"
          onClick={() => clearItems()}
        >
          clear cart
        </button>
      ) : null}
    </div>
  );
};

export default Cart;
