import Button from "../Button";
import Stats from "./Stats";

function Orders({ orders_in_cart, dispatch }) {
  return (
    <div className="bg-[#ceb4ea] mx-[10%] mt-30 rounded-4xl">
      {orders_in_cart.length === 0 ? (
        <h1 className="text-2xl font-semibold text-center py-6">
          Your orders_in_cart is empty
        </h1>
      ) : (
        <ul className="grid  grid-cols-2 py-4">
          {orders_in_cart?.map((item) => (
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
                      onClick={() => {
                        console.log(orders_in_cart);
                        dispatch({ type: "dec", payload: item.id });
                      }}
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
                      onClick={() => {
                        console.log(orders_in_cart);
                        dispatch({ type: "inc", payload: item.id });
                      }}
                    >
                      ➕
                    </Button>
                    <Button
                      onClick={() => {
                        dispatch({ type: "delete", payload: item.id });
                      }}
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
                    <h2 className="bg-red-300 text-center w-25 py-1 rounded-tr-2xl rounded-bl-2xl">
                      {item.total} $
                    </h2>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;
