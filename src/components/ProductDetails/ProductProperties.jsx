function ProductProperties({ item }) {
  return (
    <div className="flex-1 p-4 md:p-6 md:rounded-tr-4xl md:rounded-br-4xl flex flex-col justify-center items-center">
      <h1 className="bg-[#ad73ec] border-2 border-[#bd92eb] font-semibold text-white py-2 px-5 rounded-full text-center -mb-4 z-10 relative">
        Product details
      </h1>
      <div className="bg-indigo-300 w-[90%] flex flex-col border-3 border-[#ad73ec] rounded-tr-2xl rounded-bl-2xl">
        <h4 className="pt-10 pb-4 px-5 text-lg font-medium">
          {item.description}
        </h4>

        <ul>
          {item.productDetails.map((el) => (
            <li key={el} className="text-lg py-1.5 px-4 flex items-start">
              <span className="mr-2">💠</span>
              {el}
            </li>
          ))}
        </ul>

        <div className="inline-flex justify-center gap-3 pt-6 pb-8 rounded-bl-2xl">
          <h3>book</h3>
          <h3>
            ❤️ <span>1</span>
          </h3>
          <h3>
            ✈️ <span>2</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProductProperties;
