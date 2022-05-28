import "./App.css";
import CartProvider from "./components/CartProvider/CartProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <main>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </main>
    </div>
  );
}

export default App;
