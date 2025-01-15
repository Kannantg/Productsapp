import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import ProductDetailPage from "./Pages/ProductDetailPage";
import Layout from "./Components/Layout";
import Products from "./Pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id/:title" element={<ProductDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
