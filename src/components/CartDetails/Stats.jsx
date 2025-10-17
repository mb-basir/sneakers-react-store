import { useEffect, useState } from "react";

function Stats({ orders_in_cart, dispatch }) {
  const [ordersTotal, setOrdersTotal] = useState(0);
  useEffect(() => {
    function calculate() {
      setOrdersTotal(
        orders_in_cart?.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0
        )
      );
    }
    calculate();
  }, [orders_in_cart]);

  return (
    <div>
      {orders_in_cart.length > 0 && (
        <div className="bg-[#ceb4ea] mx-[10%] flex gap-5 items-center justify-center rounded-full mt-2 text-center">
          <div className="bg-red-300 py-3 px-5 rounded-full">
            <h1 className=" text-center text-xl font-semibold">
              {orders_in_cart.length} items
            </h1>
          </div>
          <div className="bg-[#ab73e8] py-3 px-15 rounded-full">
            <h1 className="text-center text-xl font-semibold">
              Total: {ordersTotal}$
            </h1>
          </div>
          <button
            onClick={() => dispatch({ type: "clearCart" })}
            className=" bg-red-400 hover:bg-red-500 text-white p-3 px-5 my-3 rounded-full transition duration-300 ease-in-out cursor-pointer"
          >
            CLEAR LIST
          </button>
        </div>
      )}
    </div>
  );
}

export default Stats;
