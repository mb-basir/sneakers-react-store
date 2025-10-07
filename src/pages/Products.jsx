import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { useReactStore } from "../contexts/StoreContext";
function Product() {
  const { products } = useReactStore();
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mx-[10%] mt-18 ">
        <ul className="grid [grid-template-columns:repeat(4,200px)] gap-x-4 gap-y-8 border-amber-200 my-10">
          {products.map((item) => (
            <Items item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Product;

function Items({ item }) {
  const navigate = useNavigate();
  return (
    <>
      <li className="bg-red-100 rounded-3xl">
        <div>
          <img
            src={item.image}
            className="w-[200px] rounded-tl-3xl rounded-tr-3xl mb-2"
            alt={`${item.name} photo`}
          />

          <div className="flex justify-between mx-3 items-center">
            <h3 className="py-1 text-sm">{item.name}</h3>
            <h2 className="py-1 text-xl">{item.price}$ </h2>
          </div>

          <div className="flex justify-center m-3 items-center">
            <Button
              variant="secondary"
              className="px-7 rounded-2xl"
              onClick={() => {
                navigate(`/product_details?id=${item.id}`); // for passing the product item to ProductDetails Page
              }}
            >
              More info ➡️
            </Button>
          </div>
        </div>
      </li>
    </>
  );
}
