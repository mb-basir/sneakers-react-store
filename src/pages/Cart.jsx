import Navbar from "../components/Navbar";
import { useReactStore } from "../contexts/StoreContext";
import Button from "../components/Button";
import { useReducer } from "react";

//My Initial State is []
function reducer(state, action) {
  switch (action.type) {
    case "dec":
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case "inc":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
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
  const [cart, dispatch] = useReducer(reducer, orders);

  return (
    <div>
      <Navbar />
      <div className="bg-[#ceb4ea] mx-[10%] mt-30 rounded-4xl">
        <ul className="grid  grid-cols-2 py-4">
          {cart?.map((item) => (
            <li className="flex gap-6 items-center px-10 py-4" key={item.id}>
              <img
                className="lg:w-30 xl:w-35 rounded-tr-2xl rounded-bl-2xl"
                src={`${item.image}`}
                alt={`${item.name}`}
              />
              <div className="flex flex-col gap-1 w-full item-2">
                <div className="flex justify-between">
                  <div className="bg-red-300 flex justify-between px-5 py-1 rounded-tr-2xl rounded-bl-2xl w-[60%]">
                    <h1>{item.name}</h1>
                    <div className="flex items-center">
                      <div
                        style={{ backgroundColor: `${item.color}` }}
                        className="w-3 h-3 rounded-full"
                      ></div>
                      <h2 className="ml-3">{+item.size}</h2>
                    </div>
                  </div>
                  <h2 className="bg-green-500 text-center w-25 py-1 rounded-tr-2xl rounded-bl-2xl">
                    {item.price} $
                  </h2>
                </div>

                <div className="flex justify-between items-center  ">
                  <div className="inline-flex">
                    <Button
                      onClick={() =>
                        dispatch({ type: "dec", payload: item.id })
                      }
                      size="sm"
                    >
                      ➖
                    </Button>
                    <input
                      type="text"
                      className=" outline-none border-2 w-15 text-center mx-1 px-3 py-0.5 rounded-2xl "
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch({
                          type: "setQuantity",
                          payload: { id: item.id, quantity: +e.target.value },
                        })
                      }
                    />
                    <Button
                      size="sm"
                      onClick={() =>
                        dispatch({ type: "inc", payload: item.id })
                      }
                    >
                      ➕
                    </Button>
                    <Button
                      onClick={() =>
                        dispatch({ type: "delete", payload: item.id })
                      }
                      className="ml-4"
                      variant="danger"
                    >
                      ✖️
                    </Button>
                  </div>
                  <div>
                    <h3 className="inline-block bg-green-400 text-[12px] px-3 my-[1px] rounded-bl-lg rounded-tr-lg">
                      {item.quantity}*{item.price}
                    </h3>
                    <h2 className="bg-red-300 text-center w-25  py-1 rounded-tr-2xl rounded-bl-2xl">
                      {item.price * item.quantity} $
                    </h2>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
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
