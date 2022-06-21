import React, { useContext, useState } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import { isInCart } from "../../helpers"

const ItemCount = ({ item, initial }) => {
  const { items, addItem } = useContext(CartContext);
  const { stock } = item;

  const [quantity, setQuantity] = useState(initial);

  let product = item && {
    ...item,
    quantity,
  };

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
    if (stock < 0 || quantity <= 0) return;
    addItem(product)
  };

  return (
    <div>
      {!isInCart(items, item) ? (
        <>
          <div className="d-flex mt-4 justify-content-center">
            <AiFillMinusCircle
              size="2rem"
              cursor="pointer"
              onClick={subtractQuantity}
            />
            <p className="mx-4 my-1 text-dark h3" style={{fontWeight: "bold"}}>{quantity}</p>
            <AiFillPlusCircle
              size="2rem"
              cursor="pointer"
              onClick={addQuantity}
            />
          </div>
          <button
            type="button"
            className="btn btn-success text-uppercase my-4 mb-3"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
          <div className="mb-5">
            <Link to="/" type="button" className="btn btn-warning text-uppercase">
              Back to shop
            </Link>
          </div>
        </>
      ) : (
        <div className="d-inline-flex flex-column">
              <Link
                to="/cart"
                type="button"
                className="btn btn-success text-uppercase my-2"
              >
                Go to cart
              </Link>
              <Link
                to="/"
                type="button"
                className="btn btn-warning text-uppercase mt-2"
              >
                Continue shopping
              </Link>
            </div>
      )}
    </div>
  );
};

export default ItemCount;
