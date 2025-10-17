import { useEffect } from "react";

function OrdersPopup({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 1500);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className="fixed inset-0 flex items-start justify-center z-50 mt-20">
      <div className="bg-white py-6 px-2 rounded-2xl shadow-xl text-center max-w-lg w-full">
        <p className="text-lg font-medium text-gray-800">{message}</p>
      </div>
    </div>
  );
}

export default OrdersPopup;
