import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="productInfo/:id" element={<ProductInfo />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
