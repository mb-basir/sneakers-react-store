import { Link } from "react-router-dom";
import { useReactStore } from "../contexts/StoreContext";
import { useState } from "react";

function Navbar() {
  const { orderSize } = useReactStore();
  const [serachActive, setSearchActive] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full py-4 bg-white/1 backdrop-blur-md">
      <div className="bg-[#ceb4ea] mx-[10%] flex justify-between items-center px-6 py-2  rounded-full">
        <Link to="/">Logo</Link>
        <div className="flex items-center gap-5">
          <div className="bg-red-200 flex gap-4 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="24"
              height="24"
            >
              <path
                d="M13 3C7.4889971 3 3 7.4889971 3 13C3 18.511003 7.4889971 23 13 23C15.396508 23 17.597385 22.148986 19.322266 20.736328L25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969L20.736328 19.322266C22.148986 17.597385 23 15.396508 23 13C23 7.4889971 18.511003 3 13 3 z M 13 5C17.430123 5 21 8.5698774 21 13C21 17.430123 17.430123 21 13 21C8.5698774 21 5 17.430123 5 13C5 8.5698774 8.5698774 5 13 5 z"
                fill="#8bc586"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="outline-none"
              onClick={() => {}}
            />
          </div>
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

export function LightDark() {
  return (
    <select className="outline-none border-amber-50">
      <option value="dark">🌙 Dark</option>
      <option value="light">☀️ Light</option>
      <option value="system">💻 System</option>
    </select>
  );
}
