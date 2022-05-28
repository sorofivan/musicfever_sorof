import "./ItemList.css";
import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.length > 0 ? (
        items.map((item, index) => (
          <Item key={index} item={item} id={item.id} />
        ))
      ) : (
        <div className="middle lds-dual-ring"></div>
      )}
    </>
  );
};

export default ItemList;
