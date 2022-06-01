import React, { useContext } from "react";
import { CartContext } from "../CartProvider/CartProvider";

const CartModal = ({ id, orderID }) => {
    const { clearItems } = useContext(CartContext);
    const closeModal = () => {
        clearItems();
    };

    return (
        <div className="modal" id={id}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Thank you!</h5>
                        <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>
                        Your order <strong>{orderID}</strong> has been completed
                        successfully.
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button
                        type="button"
                        className="btn btn-success"
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
