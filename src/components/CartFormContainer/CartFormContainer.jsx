import React, { useState } from 'react'
import CartModal from "../CartModal/CartModal";
import { Modal } from "bootstrap";
import { addDoc, collection } from "firebase/firestore";
import db from "../../service/firebase";
import CartForm from '../CartForm/CartForm';

const CartFormContainer = ({ items, totalPrice }) => {
    const [order, setOrder] = useState({
        buyer: {
        email: "",
        name: "",
        surname: "",
        phone: "",
        },
        total: "$" + totalPrice + " USD",
        items: items,
    });

    const [orderID, setOrderID] = useState("");

    const [formValidity, setFormValidity] = useState({
        email: true,
        name: true,
        surname: true,
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

    return (
        <div className="d-flex justify-content-center mb-5">
            <CartForm submit={handleSubmit} change={handleChange} validity={formValidity} order={order} />
            <CartModal id={"modal"} orderID={orderID} />
        </div>
    )
}

export default CartFormContainer
