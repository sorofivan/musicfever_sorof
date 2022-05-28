import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../config";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemList/ItemList.css";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);

  const findItem = data.find((item) => item.id === Number(id));

  useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(findItem);
      }, 2000);
    });

    getData
      .then((res) => {
        setItem(res);
      })
      .catch((err) => console.log(err));

    return () => {};
  });

  return (
    <div>
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <div className="middle lds-dual-ring"></div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
