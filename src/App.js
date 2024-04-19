import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./components/cart/cart";
import { AppleStoreContextProvider } from "./components/context/AppleStoreContext";
import Dashboard from "./pages/Dashboard";
import Bag from "./pages/Bag";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <AppleStoreContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/bag" element={<Bag />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout /> } />
          </Routes>
        </Router>
      </AppleStoreContextProvider>
    </div>
  );
}

export default App;
