import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import "./CartModal.css";

const CartModal = ({ id, orderID }) => {
    const { clearItems, totalPrice } = useContext(CartContext);

    const closeModal = () => {
        clearItems();
    };

    return (
        <div className="modal" id={id}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-dark">
                        <h5 className="modal-title text-light text-uppercase">
                        Thank you!
                        </h5>
                        <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={closeModal}
                        ></button>
                    </div>
                    <div className="modal-body bg-dark text-light">
                        <p className="mt-2">Your order for <span className="text-success price-modal">${totalPrice().toFixed(2)} USD</span> has been completed successfully.</p>
                        <p>
                        This is your order code:{" "}
                        <span className="order-code text-success">{orderID}</span>.
                        </p>
                    </div>
                    <div className="modal-footer bg-dark">
                        <button
                        type="button"
                        className="btn btn-success text-uppercase"
                        data-bs-dismiss="modal"
                        onClick={closeModal}
                        >
                            Done!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
