import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useReactStore } from "../contexts/StoreContext";
import Search from "./Search";

function Navbar() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const isProductsPage =
    location.pathname === "/product" || location.pathname === "/cart";

  console.log(searchParams);
  const { orderSize } = useReactStore();
  return (
    <div className="fixed top-0 left-0 w-full py-4 bg-white/1 backdrop-blur-md">
      <div className="bg-[#ceb4ea] mx-[10%] flex justify-between items-center px-6 py-2  rounded-full">
        <Link to="/">Logo</Link>
        {isHomepage && <Link to="product">Products</Link>}

        <div className="flex items-center gap-4">
          {isProductsPage && <Search />}
          <Link to="/cart" className="relative flex items-center">
            <img
              src="/images/icons8_add_shopping_cart_1.svg"
              alt="Cart"
              className="w-14 h-14"
            />

            <div className="bg-orange-500 text-white w-[18px] h-[18px] rounded-full absolute -top-1 -right-1.5 text-[14px] flex items-center justify-center">
              {orderSize}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

//
