import React, { useState } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  function subtractQuantity() {
    if (quantity > initial) {
      setQuantity(quantity - 1);
    }
  }

  function addQuantity() {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }

  const addToCart = () => {
    onAdd(quantity);
  };

  return (
    <div>
      <div className="d-flex mt-4 justify-content-center">
        <AiFillMinusCircle
          size="2rem"
          cursor="pointer"
          onClick={subtractQuantity}
        />
        <p className="mx-4 my-1 text-dark h3">{quantity}</p>
        <AiFillPlusCircle size="2rem" cursor="pointer" onClick={addQuantity} />
      </div>
      <button
        type="button"
        className="btn btn-warning text-uppercase my-3 mb-5"
        onClick={addToCart}
      >
        add to cart
      </button>
    </div>
  );
};

export default ItemCount;
