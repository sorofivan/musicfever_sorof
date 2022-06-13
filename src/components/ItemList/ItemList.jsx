import React from "react";
import Category from "../../views/Category/Category";
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";

const ItemList = ({ items, category }) => {
  return (
    <>
      {items.length && !category > 0 ? (
        <div>
          <div>
            <h1 className="page-titles text-uppercase">Music Fever</h1>
          </div>
          <div>
            <h2 className="page-titles text-uppercase mt-0">Web Store</h2>
          </div>
          <p className="shop-subtitle">Swipe down to meet the power of music!</p>
        </div>
      ) : (
        <Category items={items} category={category}/>
      )}
      {items.length > 0 ? (
        items.map((item, index) => (
          <Item key={index} item={item} id={item.id} />
        ))
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ItemList;
