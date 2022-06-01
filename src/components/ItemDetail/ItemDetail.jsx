import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartProvider/CartProvider";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.css";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const [add, setAdd] = useState(false);

  const onAdd = (quantity) => {
    addItem(item, quantity);
    setAdd(true);
  };

  return (
    <div className="container">
      <div className="left-column">
        <img className="active" src={item.image} alt="..." />
      </div>
      <div className="right-column">
        <div className="product-description">
          <span>{item.class}</span>
          <h1 className="text-uppercase my-2">
            {item.brand} {item.model}
          </h1>
          <ul className="list-group list-group-flush my-4">
            <li className="mt-3">Pickups: {item.pickups}</li>
            <li>Bridge: {item.bridge}</li>
            <li>Strings Number: {item.strings}</li>
            <li>Signaure: {item.signature}</li>
            <li className="mb-3">Body: {item.body}</li>
          </ul>
        </div>
        <div className="d-block product-price">
          <span className="text-success">
            <b>${item.price}</b>
          </span>
          <p>
            <b>Stock {item.stock}</b>
          </p>
          {!add ? (
            <ItemCount
              item={item}
              stock={item.stock}
              initial={1}
              onAdd={onAdd}
            />
          ) : (
            <div className="d-inline-flex flex-column">
              <Link
                to="/cart"
                type="button"
                className="btn btn-success text-uppercase my-2"
              >
                go to cart
              </Link>
              <Link
                to="/"
                type="button"
                className="btn btn-warning text-uppercase mt-2 mb-5"
              >
                continue shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
