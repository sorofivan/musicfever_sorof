import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Home from "../components/Home/Home";
import AboutUs from "../components/AboutUs/AboutUs";
import Cart from "../components/Cart/Cart";
import ContactUs from "../components/ContactUs/ContactUs";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "../components/Error404/Error404";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ItemListContainer />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
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
