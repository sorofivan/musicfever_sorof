import React from "react";

const CartForm = ({ submit, change, validity, order }) => {
    return (
        <>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className={`form-control ${validity.email ? "" : "is-invalid"}`}
                        id="email"
                        aria-describedby="emailHelp"
                        value={order.buyer.email}
                        onChange={change}
                        required
                    />
                    <div className="invalid-feedback">Required field!</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className={`form-control ${validity.name ? "" : "is-invalid"}`}
                        id="name"
                        value={order.buyer.name}
                        onChange={change}
                        required
                    />
                    <div className="invalid-feedback">Required field!</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="surname" className="form-label">
                        Surname
                    </label>
                    <input
                        type="text"
                        className={`form-control ${
                        validity.surname ? "" : "is-invalid"
                        }`}
                        id="surname"
                        value={order.buyer.surname}
                        onChange={change}
                        required
                    />
                    <div className="invalid-feedback">Required field!</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="text"
                        className={`form-control ${validity.phone ? "" : "is-invalid"}`}
                        id="phone"
                        value={order.buyer.phone}
                        onChange={change}
                        required
                    />
                    <div className="invalid-feedback">Required field!</div>
                </div>
                <button
                type="submit"
                className="btn btn-success text-uppercase mt-4 mb-2"
                style={{ width: "65%" }}
                >
                    Checkout
                </button>
            </form>
        </>
    );
};

export default CartForm;
