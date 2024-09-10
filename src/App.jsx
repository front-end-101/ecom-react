import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/About/About";
import Cart from "./Pages/Cart/Cart";
import CartContextWrapper from "./store/CartContext";

export default function App() {
  return (
    <CartContextWrapper>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </CartContextWrapper>
  );
}

// rendering list in react
// conditional rendering
// how to pass data from parent to child
// useState hook
// event listener in react
// parent child rerendering
// useEffect
// fetch data
// context API
// useRef
// useCallback
// useMemo
// memo

//useCallback
//useMemo
//useRef
