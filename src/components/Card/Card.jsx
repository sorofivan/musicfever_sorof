import React from 'react'
import { BsTrash } from "react-icons/bs";

const Card = ({ item, remove }) => {
    return (
    <div className="card p-1" style={{width: "18rem"}}>
        <img src={item.image} className="card-img-top" alt="Product Img" />
        <div className="card-body">
            <h5 className="card-title">{item.brand}</h5>
            <h5 className="card-title">{item.model}</h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: ${item.price}</li>
                <li className="list-group-item">Quantity: {item.quantity}</li>
                <li className="list-group-item">Subtotal: ${(item.quantity * item.price).toFixed(3)}</li>
            </ul>
        <BsTrash
            style={{
            height: 20,
            width: 20,
            marginTop: 6,
            color: "#f00",
            cursor: "pointer",
            }}
            onClick={() => remove(item.id)}
        />
        </div>
    </div>
    )
}

export default Card