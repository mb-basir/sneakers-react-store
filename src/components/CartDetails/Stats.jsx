import { useEffect, useState } from "react";

function Stats({ orders_in_cart }) {
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
        <div className="bg-[#ceb4ea] mx-[10%] flex justify-center p-6 rounded-full mt-2 text-center">
          <div className=" flex-1">
            <h1 className=" text-center text-xl font-semibold">
              {orders_in_cart.length} items
            </h1>
          </div>
          <div className="flex-1">
            <h1 className="text-center text-xl font-semibold">
              Total: {ordersTotal}$
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Stats;
