import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useReactStore } from "../contexts/StoreContext";
import ProductImage from "../components/ProductDetails/ProductImage";
import ProductColors from "../components/ProductDetails/ProductColors";
import ProductSizes from "../components/ProductDetails/ProductSizes";
import ProductQuantity from "../components/ProductDetails/ProductQuantity";
import ProductProperties from "../components/ProductDetails/ProductProperties";
import Popup from "../components/Popup";
import { useState } from "react";

function ProductDetails() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const url_id = searchParams.get("id");
  const [id, setId] = useState(null);
  const [size, setSize] = useState(null);
  const [color, setColour] = useState(null);
  const { quantity, setQuantity } = useReactStore();
  const { products } = useReactStore();
  const { orders, setOrders } = useReactStore();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <Navbar />

      {products
        .filter((items) => +items.id === +url_id)
        .map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center sm:mx-[20%] md:mx-[10%] sm:mt-30 md:mt-40 md:flex-row mt-40 bg-[#ceb4ea] mx-[10%] rounded-4xl overflow-hidden"
          >
            <ProductImage item={item} />
            <div className="flex-1 sm:flex-1 p-4 md:p-6 ">
              <div className="flex justify-between items-end pb-8 py-8">
                <h2 className="font-semibold text-3xl">{item.name}</h2>
                <h3 className="text-2xl">{item.price} $</h3>
              </div>
              <ProductColors item={item} color={color} setColour={setColour} />
              <ProductSizes item={item} setId={setId} setSize={setSize} />
              <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
              <Button
                className="block "
                variant="danger"
                disabled={!size || !color}
                onClick={() => {
                  const newOrder = {
                    id: crypto.randomUUID(),
                    productId: item.id,
                    price: Number(item.price),
                    name: item.name,
                    size: Number(size),
                    quantity: Number(quantity),
                    total: +item.price * +quantity,
                    color: color,
                    image: item.image,
                  };

                  const isOrderExist = orders.find(
                    (item) =>
                      item.productId === newOrder.productId &&
                      item.size === newOrder.size &&
                      item.color === newOrder.color
                  );

                  if (isOrderExist) {
                    setShowPopup(true);
                  } else {
                    navigate(-1);
                    setQuantity(1);
                    setOrders(() => [...orders, newOrder]);
                    console.log(orders);
                  }
                }}
              >
                Add to Cart
              </Button>
              {showPopup && (
                <Popup
                  message="This item with the same size and color is already in your cart."
                  onClose={() => setShowPopup(false)}
                />
              )}
            </div>
            <ProductProperties item={item} />
          </div>
        ))}
    </div>
  );
}

export default ProductDetails;
