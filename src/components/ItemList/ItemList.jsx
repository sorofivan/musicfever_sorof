import React from "react";
import Carousel from "../Carousel/Carousel";
import Category from "../../views/Category/Category";
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";
import "./ItemList.css"

const ItemList = ({ items, category }) => {
  return (
    <>
      {items.length && !category > 0 ? (
        <div>
          <div className="title-text">
            <h1>Music Fever</h1>
            <h2>Web Store</h2>
          </div>
          <Carousel />
          <p className="shop-subtitle text-uppercase">Swipe down to meet the power of music!</p>
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
