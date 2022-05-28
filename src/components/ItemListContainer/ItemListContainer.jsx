import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { data } from "../../config";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    getData
      .then((res) => {
        setItems(res);
      })
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <div className="row m-4">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
