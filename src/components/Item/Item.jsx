import React from "react";
import { Link } from "react-router-dom";
import "../Item/Item.css";

const Item = ({ item, id }) => {
  return (
    <div className="col-md-4 p-4">
      <h5 className="card-title text-dark mb-3">{item.brand}</h5>
      <div className="card border-2">
        <img src={item.image} className="card-img-top" alt="Product Img" />
        <div className="card-body bg-dark">
          <h6 className="text-light">
            <b>{item.model}</b>
          </h6>
          <p className="text-success mt-2">
            <b>${item.price}</b>
          </p>
          <Link
            to={`/item-detail/${id}`}
            type="button"
            className="btn btn-warning text-uppercase mb-1"
          >
            <b>view more</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
