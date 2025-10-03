function ProductProperties({ item }) {
  return (
    <div className="flex-1 p-4 md:p-6 md:rounded-tr-4xl md:rounded-br-4xl flex flex-col justify-center items-center">
      <h1 className="bg-[#ad73ec] border-2 border-[#bd92eb] font-semibold text-white py-2 px-5 rounded-full text-center -mb-5 z-10 relative">
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

        <div className=" flex items-center justify-center pt-6 pb-4 ">
          <div className="inline-flex justify-center gap-5 items-center bg-indigo-400 px-5 py-2 rounded-full">
            <div className="flex justify-center gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="22"
                height="22"
              >
                <path
                  d="M16 28.15625L15.5 27.863281C14.988281 27.570313 3 20.53125 3 13C3 9.140625 6.140625 6 10 6C12.542969 6 14.773438 7.363281 16 9.398438C17.226563 7.363281 19.457031 6 22 6C25.859375 6 29 9.140625 29 13C29 20.53125 17.011719 27.570313 16.5 27.863281 Z M 10 8C7.242188 8 5 10.242188 5 13C5 18.605469 13.785156 24.445313 16 25.828125C18.214844 24.445313 27 18.605469 27 13C27 10.242188 24.757813 8 22 8C19.242188 8 17 10.242188 17 13L15 13C15 10.242188 12.757813 8 10 8Z"
                  fill="#000"
                />
              </svg>
              <h3>1</h3>
            </div>
            <div className="flex justify-center gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="22"
                height="22"
              >
                <path
                  d="M36 5C32.151772 5 29 8.1517752 29 12C29 12.585766 29.198543 13.109464 29.335938 13.654297L17.345703 19.652344C16.059118 18.073938 14.181503 17 12 17C8.1517722 17 5 20.151775 5 24C5 27.848225 8.1517722 31 12 31C14.181503 31 16.059118 29.926062 17.345703 28.347656L29.335938 34.345703C29.198543 34.890536 29 35.414234 29 36C29 39.848225 32.151772 43 36 43C39.848228 43 43 39.848225 43 36C43 32.151775 39.848228 29 36 29C33.818497 29 31.940882 30.073938 30.654297 31.652344L18.664062 25.654297C18.801457 25.109464 19 24.585766 19 24C19 23.414234 18.801457 22.890536 18.664062 22.345703L30.654297 16.347656C31.940882 17.926062 33.818497 19 36 19C39.848228 19 43 15.848225 43 12C43 8.1517752 39.848228 5 36 5 z M 36 8C38.226909 8 40 9.7730927 40 12C40 14.226907 38.226909 16 36 16C33.773091 16 32 14.226907 32 12C32 9.7730927 33.773091 8 36 8 z M 12 20C14.226909 20 16 21.773093 16 24C16 26.226907 14.226909 28 12 28C9.7730915 28 8 26.226907 8 24C8 21.773093 9.7730915 20 12 20 z M 36 32C38.226909 32 40 33.773093 40 36C40 38.226907 38.226909 40 36 40C33.773091 40 32 38.226907 32 36C32 33.773093 33.773091 32 36 32 z"
                  fill="#000"
                />
              </svg>
              <h3>4</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductProperties;
