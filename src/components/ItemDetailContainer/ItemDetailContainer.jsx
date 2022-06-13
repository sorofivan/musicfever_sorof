import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../views/ItemDetail/ItemDetail";
import db from "../../service/firebase";
import { doc, getDoc } from "firebase/firestore";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const itemReference = doc(db, "data", id);
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
        <Spinner />
      )}
    </div>
  );
};

export default ItemDetailContainer;
