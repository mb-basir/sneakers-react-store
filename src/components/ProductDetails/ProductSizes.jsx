function ProductSizes({ item, setId, setSize }) {
  return (
    <ul className=" bg-indigo-300 rounded-4xl inline-flex items-center mt-2">
      <h2 className="inline font-medium py-3 pl-3 pr-6 bg-[#ad73ec] text-white  rounded-4xl mr-2">
        Sizes
      </h2>
      {item.sizes.map((el) => (
        <li className="inline-block" key={el}>
          <label>
            <input
              type="radio"
              name="size"
              value={el}
              onChange={() => {
                setId(+item.id);
                setSize(+el);
              }}
            />
            <span className="pl-0.5 pr-2">{el}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default ProductSizes;
