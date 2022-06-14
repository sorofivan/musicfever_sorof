import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import Card from "../../components/Card/Card";
import CartFormContainer from "../../components/CartFormContainer/CartFormContainer";
import empty from "../../assets/images/empty.png";
import "./Cart.css";

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
      {items.length > 0 && (
        <div className="cart-title">
          <h1 className="page-titles text-uppercase">Cart</h1>
        </div>
      )}
      {items.length > 0 ? (
        items.map((item, index) => (
          <div className="d-inline-flex m-3 mt-4" key={index}>
            <Card item={item} remove={removeItem} />
          </div>
        ))
      ) : (
        <div>
          <img src={empty} className="cart-img mt-4 mt-2" alt="Empty Cart" />
          <h2 className="empty-title">Oops! Your cart is empty!</h2>
          <h5 className="empty-subtitle">Looks like you haven't added</h5>
          <h5 className="empty-subtitle">anything yo your cart yet.</h5>
          <Link
            to="/"
            type="button"
            className="btn btn-warning text-uppercase mt-4"
          >
            Shop now
          </Link>
        </div>
      )}
      {totalPrice() > 0 && (
        <div className="total-container text-uppercase">
          <h3>
            Total:{" "}
            <span className="text-success">${totalPrice().toFixed(2)} USD</span>
          </h3>
        </div>
      )}
      {items.length > 0 && (
        <div className="my-4">
          <button
            type="button"
            className="btn btn-danger btn-w text-uppercase mx-3 mb-4"
            onClick={() => clearItems()}
          >
            Clear cart
          </button>
          <Link
            to="/"
            type="button"
            className="btn btn-warning btn-w text-uppercase mx-3 mb-4"
          >
            Continue shopping
          </Link>
          <div className="form-container">
            <h4 className="page-titles text-uppercase text-center my-4">
              Customer's information
            </h4>
            <CartFormContainer items={items} totalPrice={totalPrice().toFixed(2)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
