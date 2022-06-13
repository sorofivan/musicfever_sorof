import CartProvider from "./context/CartProvider";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

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
