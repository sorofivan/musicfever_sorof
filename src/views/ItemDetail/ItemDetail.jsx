import React from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {

  return (
    <div className="container">
      <div className="left-column">
        <img className="active" src={item.image} alt="Product Img" />
      </div>
      <div className="right-column">
        <div className="product-description">
          <div className="product-name">
            <span>{item.class}</span>
            <h1 className="text-uppercase my-2">
              {item.brand} {item.model}
            </h1>
          </div>
          <div className="list-container">
            <ul className="list-group list-group-flush my-4">
              <li className="mt-3">Pickups: {item.pickups}</li>
              <li>Bridge: {item.bridge}</li>
              <li>Strings Number: {item.strings}</li>
              <li>Signaure: {item.signature}</li>
              <li className="mb-3">Body: {item.body}</li>
            </ul>
          </div>
        </div>
        <div className="d-block product-price">
          <span className="text-success">${item.price} USD</span>
          <p className="text-uppercase">Stock {item.stock}</p>
            <ItemCount
              item={item}
              initial={1}
            />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
