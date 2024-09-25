import Home from "./components/screens/Home";
import Layout from "./components/screens/Layout";
import ReactDOM from "react-dom/client";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Products from "./components/screens/Products";
import Product from "./components/screens/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Layout />} />
        <Route path="products/" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
