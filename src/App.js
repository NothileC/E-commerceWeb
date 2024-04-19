// Importing necessary dependencies and styles
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./components/cart/cart";
import { AppleStoreContextProvider } from "./components/context/AppleStoreContext";
import Dashboard from "./pages/Dashboard";
import Bag from "./pages/Bag";
import Checkout from "./pages/Checkout";

// The main component of the application
function App() {
  return (
    <div className="App">
      {/* Wrapping the application with the AppleStoreContextProvider to provide state */}
      <AppleStoreContextProvider>
        {/* Setting up the router */}
        <Router>
          {/* Defining routes */}
          <Routes>
            {/* The route for the dashboard page */}
            <Route path="/" element={<Dashboard />} />
            
            {/* The route for the bag page */}
            <Route path="/bag" element={<Bag />} />
            
            {/* The route for the cart page */}
            <Route path="/cart" element={<Cart />} />
            
            {/* The route for the checkout page */}
            <Route path="/checkout" element={<Checkout /> } />
          </Routes>
        </Router>
      </AppleStoreContextProvider>
    </div>
  );
}

// Exporting the App component as the default export
export default App;


/*
The provided React code sets up a basic application using React Router 
for routing and manages state using the AppleStoreContextProvider context 
provider. It consists of several components and pages.
*/
