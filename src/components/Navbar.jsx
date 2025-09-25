import { Link } from "react-router-dom";
import { useReactStore } from "../contexts/StoreContext";

function Navbar() {
  const { orderSize } = useReactStore();
  return (
    <div className="fixed top-0 left-0 w-full py-4 bg-white/1 backdrop-blur-md">
      <div className="bg-[#ceb4ea] mx-[10%] flex justify-between p-6 rounded-full">
        <Link to="/">Logo</Link>
        <div className="flex gap-5">
          <LightDark />
          <Link to="/cart">
            CART{" "}
            <div className="bg-orange-500 text-white px-2 rounded-full inline-block ">
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
      <option value="dark">🌖 Dark</option>
      <option value="light">☀️ Light</option>
      <option value="system">💻 System</option>
    </select>
  );
}
