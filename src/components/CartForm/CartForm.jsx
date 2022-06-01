
import React, { useState } from "react";
import CartModal from "../CartModal/CartModal";
import { Modal } from "bootstrap";
import { addDoc, collection } from "firebase/firestore";
import db from "../service/firebase";

const CartForm = ({ items, totalPrice }) => {
    const [order, setOrder] = useState({
        buyer: {
        email: "",
        name: "",
        lastName: "",
        phone: "",
        },
        total: totalPrice,
        items: items,
    });

    const [orderID, setOrderID] = useState("");

    const [formValidity, setFormValidity] = useState({
        email: true,
        name: true,
        lastName: true,
        phone: true,
    });

    const handleChange = (e) => {
        const { value, id } = e.target;
        isFormValid(value, id);
        setOrder({ ...order, buyer: { ...order.buyer, [id]: value } });
    };

    const handleSubmit = (e) => {
        if (isFormValid()) {
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
            .then((docRef) => {
            setOrderID(docRef.id);
            // updateStock();
            const modalOrder = new Modal("#modal");
            modalOrder.show();
            })
            .catch((e) => {
            console.log(e);
            });
        }

        e.preventDefault();
    };

    const isFormValid = (value, id) => {
        if (value !== "") {
            setFormValidity({ ...formValidity, [id]: true });
        } else {
            setFormValidity({ ...formValidity, [id]: false });
        }
        return Object.keys(formValidity).every(Boolean);
    };

    // const updateStock = () => {
    //     const batch = writeBatch(db);
    //     items.forEach((item) => {
    //     const id = item.id;
    //     const newStock = item.stock - item.quantity;
    //     const docRef = doc(db, "data", id);
    //     batch.update(docRef, { stock: newStock });
    //     });

    //     batch.commit();
    // };

    return (
        <div className="d-flex justify-content-center mb-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className={`form-control ${formValidity.email ? "" : "is-invalid"}`}
                        id="email"
                        aria-describedby="emailHelp"
                        value={order.buyer.email}
                        onChange={handleChange}
                        required
                    />
                    <div className="invalid-feedback">Required field.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className={`form-control ${formValidity.name ? "" : "is-invalid"}`}
                        id="name"
                        value={order.buyer.name}
                        onChange={handleChange}
                        required
                    />
                    <div className="invalid-feedback">Required field.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className={`form-control ${
                        formValidity.lastName ? "" : "is-invalid"
                        }`}
                        id="lastName"
                        value={order.buyer.lastName}
                        onChange={handleChange}
                        required
                    />
                    <div className="invalid-feedback">Required field.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="text"
                        className={`form-control ${formValidity.phone ? "" : "is-invalid"}`}
                        id="phone"
                        value={order.buyer.phone}
                        onChange={handleChange}
                        required
                    />
                    <div className="invalid-feedback">Required field.</div>
                </div>
                <button type="submit" className="btn btn-success text-uppercase mt-4 mb-5" style={{width: "65%"}}>
                Checkout
                </button>
            </form>
            <CartModal id={"modal"} orderID={orderID} />
        </div>
    );
};

export default CartForm;
