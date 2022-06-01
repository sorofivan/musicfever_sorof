import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import db from "../service/firebase";
import { getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const getData = async () => {
    const itemCollection = collection(db, "data");

    try {
      const itemsData = await getDocs(itemCollection);
      const dataResponse = itemsData.docs.map(
        (item) => (item = { id: item.id, ...item.data() })
      );
      setItems(dataResponse);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row m-4">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
