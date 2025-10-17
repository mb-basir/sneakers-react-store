import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import { StoreProvider } from "./contexts/StoreContext";
import Products from "./pages/Products";
import OrdersPopup from "./components/OrdersPopup";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product_details" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ser" element={<OrdersPopup />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
