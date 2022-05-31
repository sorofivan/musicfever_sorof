import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import bd from "../service/firebase";
import { doc, getDoc } from "firebase/firestore";
import "../ItemList/ItemList.css";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const itemReference = doc(bd, "data", id);
    getDoc(itemReference)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((e) => {
        console.log(e);
      });
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
