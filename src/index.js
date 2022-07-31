import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Welcome from "./screens/Welcome";
import Products from "./screens/Products";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="products" element={<Products />} />
    </Routes>
  </BrowserRouter>
);

// domain.com/ => component A
// domain.com/products => component B
