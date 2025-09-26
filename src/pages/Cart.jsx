import Navbar from "../components/Navbar";
import { useReactStore } from "../contexts/StoreContext";
import { useReducer } from "react";
import Orders from "../components/CartDetails/Orders";
import Stats from "../components/CartDetails/Stats";
// import Stats from "../components/CartDetails/Stats";

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

    case "setQuantity":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
  }
}

function Cart() {
  const { orders } = useReactStore();
  const [orders_in_cart, dispatch] = useReducer(reducer, orders);

  return (
    <div>
      <Navbar />
      <Orders orders_in_cart={orders_in_cart} dispatch={dispatch} />
      <Stats orders_in_cart={orders_in_cart} />
    </div>
  );
}

export default Cart;

/**
 * 
 *  
 * 
 * [   {
      id: 1,
      price: 120,
      name: "Running Shoes",
      size: 40,
      quantity: 1,
      colour: "Red",
      image: "public/images/artem-bondarchuk-XPBYi4K8vFI-unsplash.jpg",
    },
    {
      id: 4,
      price: 90,
      name: "High-Top Sneakers",
      size: 41,
      quantity: 2,
      colour: "Black",
      image: "public/images/imani-bahati-LxVxPA1LOVM-unsplash.jpg",
    },
    {
      id: 7,
      price: 40,
      name: "Leather Boots",
      size: 40,
      quantity: 1,
      colour: "Brown",
      image: "public/images/malvestida-DMl5gG0yWWY-unsplash.jpg",
    },
    {
      id: 10,
      price: 100,
      name: "Flip Flops",
      size: 40,
      quantity: 2,
      colour: "Black",
      image: "public/images/shoes-6336173_1920.jpg",
    },
    {
      id: 6,
      price: 90,
      name: "Slip-On Shoes",
      size: 40,
      quantity: 5,
      colour: "Blue",
      image: "public/images/maksim-larin-1vy2QcZd5FU-unsplash.jpg",
    },
    {
      id: 11,
      price: 80,
      name: "Trail Running Shoes",
      size: 39,
      quantity: 2,
      colour: "Green",
      image: "public/images/the-dk-photography-NUoPWImmjCU-unsplash.jpg",
}]
 */
