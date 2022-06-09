import React, { useContext } from "react";
import { CartContext } from "../CartProvider/CartProvider";
import { Link } from "react-router-dom";
import CartForm from "../CartForm/CartForm";
import empty from "../../empty.png"
import Card from "../Card/Card";

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
          <div className="d-inline-flex m-3" key={index}>
            <Card item={item} remove={removeItem}/>
          </div>
        ))
      ) : (
        <div>
          <img
            src={empty}
            className="my-2"
            alt="Empty Cart"
            width="250"
            height="230"
          />
          <h2 style={{ marginTop: 15 }}>Oops! Your cart is empty!</h2>
          <h5 style={{ color: "#86939e" }}>Looks like you haven't added</h5>
          <h5 style={{ color: "#86939e" }}>anything yo your cart yet</h5>
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
