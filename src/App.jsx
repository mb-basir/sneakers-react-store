import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import { StoreProvider } from "./contexts/StoreContext";

function App() {
  // console.log(products);
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
