import Navbar from "../components/Navbar";
import { useReactStore } from "../contexts/StoreContext";
import { useReducer, useEffect } from "react";
import Orders from "../components/CartDetails/Orders";
import Stats from "../components/CartDetails/Stats";

function reducer(state, action) {
  switch (action.type) {
    case "dec":
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? {
              ...item,
              total: item.total - item.price,
              quantity: item.quantity - 1,
            }
          : item
      );

    case "inc":
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              total: item.total + item.price,
              quantity: item.quantity + 1,
            }
          : item
      );

    case "delete":
      return state.filter((item) => item.id !== action.payload);

    case "clearCart":
      return [];
    case "setQuantity":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    default:
      return state;
  }
}

function Cart() {
  const { orders, setOrders } = useReactStore();
  const [orders_in_cart, dispatch] = useReducer(reducer, orders);

  // 🔄 Sync reducer state back to context + localStorage
  useEffect(() => {
    setOrders(orders_in_cart);
  }, [orders_in_cart, setOrders]);
  console.log(orders_in_cart);
  return (
    <div>
      <Navbar />
      <Orders orders_in_cart={orders_in_cart} dispatch={dispatch} />
      <Stats orders_in_cart={orders_in_cart} dispatch={dispatch} />
    </div>
  );
}

export default Cart;
