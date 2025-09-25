import Button from "../Button";

function ProductQuantity({ quantity, setQuantity }) {
  return (
    <div className=" bg-indigo-300 rounded-4xl inline-flex items-center mb-2 mt-2 pr-2">
      <h3 className="bg-[#ad73ec] text-white  font-medium rounded-4xl p-3 pr-6 ">
        Quantity
      </h3>
      <Button
        size="sm"
        variant="primary"
        className="ml-3 py-1"
        onClick={() => quantity > 1 && setQuantity((quantity) => quantity - 1)}
      >
        ➖
      </Button>
      <input
        onChange={(e) => {
          const val = Number(e.target.value);
          if (!isNaN(val) && val >= 1) {
            setQuantity(val);
          }
        }}
        value={quantity}
        type="text"
        className="w-20 mx-2 outline-none text-center border py-1 px-3 rounded-3xl"
      />
      <Button
        size="sm"
        className="py-1"
        variant="primary"
        onClick={() => setQuantity((quantity) => quantity + 1)}
      >
        ➕
      </Button>
    </div>
  );
}

export default ProductQuantity;
