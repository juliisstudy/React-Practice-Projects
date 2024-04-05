import "./App.css";
import Home from "./pages/home.jsx";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/cart.jsx";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
