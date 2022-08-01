import MainHeader from "./components/MainHeader";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./screens/Welcome";
import Products from "./screens/Products";
import ProductDetail from "./screens/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
