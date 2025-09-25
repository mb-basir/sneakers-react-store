import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { useReactStore } from "../contexts/StoreContext";
function Homepage() {
  const { products } = useReactStore();
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mx-[10%] mb-10 mt-20 rounded-4xl ">
        <ul className="grid [grid-template-columns:repeat(4,250px)] gap-x-6 gap-y-12 border-amber-200 my-14">
          {products.map((item) => (
            <Items item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Homepage;

function Items({ item }) {
  const navigate = useNavigate();
  return (
    <>
      <li className="bg-red-100 rounded-3xl">
        <div>
          <img
            src={item.image}
            className="w-[250px] rounded-tl-3xl rounded-tr-3xl mb-3"
            alt={`${item.name} photo`}
          />

          <div className="flex justify-between mx-3 items-center">
            <h3 className="py-2">{item.name}</h3>
            <h2 className="py-2 text-2xl">{item.price}$ </h2>
          </div>

          <div className="flex justify-center m-3 mb-4 items-center">
            <Button
              variant="secondary"
              onClick={() => {
                navigate(`/product?id=${item.id}`); // for passing the product item to ProductDetails Page
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
