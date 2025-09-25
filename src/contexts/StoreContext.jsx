import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext();
function StoreProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const orderSize = orders.length;
  console.log(orderSize);

  useEffect(function () {
    async function store() {
      try {
        const res = await fetch("http://localhost:8000/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    }
    store();
  }, []);
  return (
    <StoreContext.Provider
      value={{
        products,
        orders,
        setOrders,
        quantity,
        setQuantity,
        orderSize,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

function useReactStore() {
  const context = useContext(StoreContext);
  if (context === undefined)
    throw new Error("context was used outside the provider!");
  return context;
}

export { StoreProvider, useReactStore };
