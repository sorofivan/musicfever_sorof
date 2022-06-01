import React, { useContext } from "react";
import { CartContext } from "../CartProvider/CartProvider";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartForm from "../CartForm/CartForm";

const Cart = () => {
  const { items, removeItem, clearItems } = useContext(CartContext);

  const totalPrice = () => {
    const totalByItem = items.map((item) => {
      return item.price * item.quantity;
    });
    return totalByItem.reduce((a, b) => {
      return a + b;
    }, 0);
  };

  return (
    <div className="my-5">
      {items.length > 0 ? (
        items.map((item, index) => (
          <div className="d-flex justify-content-between my-2" key={item.id}>
            <h5 style={{ marginLeft: 250 }}>#{index + 1}</h5>
            <h5 className="mx-5">
              {item.brand} {item.model} | ${item.price} x{item.quantity} | $
              {(item.quantity * item.price).toFixed(3)}
            </h5>
            <BsTrash
              style={{
                marginRight: 250,
                marginTop: 6,
                color: "#f00",
                cursor: "pointer",
              }}
              onClick={() => removeItem(item.id)}
            />
          </div>
        ))
      ) : (
        <div>
          <h1 style={{ marginTop: 200 }}>Empty Cart</h1>
          <Link
            to="/"
            type="button"
            className="btn btn-warning text-uppercase my-4"
          >
            shop now
          </Link>
        </div>
      )}
      {totalPrice() > 0 && (
        <div className="text-uppercase mt-5">
          <h3>{"total: $" + totalPrice().toFixed(3)}</h3>
        </div>
      )}
      {items.length > 0 && (
        <div className="my-5">
          <button
            type="button"
            className="btn btn-danger text-uppercase mx-3 mb-4"
            style={{width: "200px"}}
            onClick={() => clearItems()}
          >
            clear cart
          </button>
          <Link
            to="/"
            type="button"
            className="btn btn-warning text-uppercase mx-3 mb-4"
            style={{width: "200px"}}
          >
            continue shopping
          </Link>
          <div>
            <h4 className="text-uppercase text-center my-4">customer's information</h4>
            <CartForm items={items} totalPrice={totalPrice()} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
