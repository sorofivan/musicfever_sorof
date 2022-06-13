import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Cart from "../views/Cart/Cart";
import ContactUs from "../views/ContactUs/ContactUs";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "../views/Error/Error";
import Shop from "../views/Shop/Shop";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Shop />} />
            <Route path="/" element={<Shop />} />
            <Route path="/:category" element={<ItemListContainer />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item-detail/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
