function ProductColors({ item, color, setColour }) {
  return (
    <div className="bg-indigo-300 rounded-4xl inline-flex gap-2 pr-6 mt-6 items-center">
      <h3 className="font-medium bg-[#ad73ec] text-white py-3  pl-3 pr-6 rounded-4xl">
        Colour
      </h3>
      <div className="flex gap-2">
        {item.colors.map((el) => (
          <label
            key={el}
            className="cursor-pointer flex flex-col items-center group"
          >
            <input
              type="radio"
              name="color"
              value={el}
              onChange={() => setColour(el)}
              className="hidden"
            />
            <div
              style={{ backgroundColor: el }}
              className={`w-6 h-6 rounded-full border-2 transform transition-all duration-300 ease-in-out ${
                color === el ? "scale-115 border-white" : "border-gray-300"
              }`}
            ></div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default ProductColors;
