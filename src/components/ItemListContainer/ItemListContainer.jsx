import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import db from "../../service/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  
  const [items, setItems] = useState([]);

  useEffect (() => {
    const itemCollection = collection(db, "data");

    if (!category) {
      getDocs(itemCollection)
        .then((snapshot) => {
          if (!snapshot.empty) {
            setItems(
              snapshot.docs.map((doc) => {
                return {
                  id: doc.id,
                  ...doc.data(),
                };
              })
            );
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      const q = query(itemCollection, where("category", "==", category));
      getDocs(q).then((snapshot) => {
        if (!snapshot.empty) {
          setItems(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
          );
        }
      });
    }
}, [category]);

  return (
    <div className="row m-4">
      <ItemList items={items} category={category} />
    </div>
  );
};

export default ItemListContainer;
