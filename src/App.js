import "./App.css";
import CartProvider from "./components/CartProvider/CartProvider";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <CartProvider>
        <AppRoutes />
      </CartProvider>  
      </div>
      <Footer />
    </div>
  );
}

export default App;
