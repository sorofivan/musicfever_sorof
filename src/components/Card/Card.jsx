import React from "react";
import { BsTrash } from "react-icons/bs";
import "./Card.css";

const Card = ({ item, remove }) => {
    return (
        <div className="card card-w bg-dark p-1">
            <div className="card-body">
                <h5 className="card-title card-name text-light">
                {item.brand} {item.model}
                </h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-light bg-dark">
                        Quantity: {item.quantity}
                    </li>
                    <li className="list-group-item text-light bg-dark">
                        Price: ${item.price} USD
                    </li>
                    <li className="list-group-item text-light bg-dark">
                        Subtotal:{" "}
                        <span className="subtotal-bold text-success">
                        ${(item.quantity * item.price).toFixed(2)} USD
                        </span>
                    </li>
                </ul>
                <BsTrash className="trash-styles" onClick={() => remove(item.id)} />
            </div>
        </div>
    );
};

export default Card;
