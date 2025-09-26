import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext();

function StoreProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });
  const [quantity, setQuantity] = useState(1);

  // ✅ helper function to update state + localStorage
  function updateOrders(newOrders) {
    setOrders(newOrders);
    localStorage.setItem("orders", JSON.stringify(newOrders));
  }

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

  // Save orders to localStorage whenever orders change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return (
    <StoreContext.Provider
      value={{
        products,
        orders,
        setOrders,
        quantity,
        setQuantity,
        updateOrders,
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
