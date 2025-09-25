// components/Popup.js
import { useEffect } from "react";

function Popup({ message, onClose }) {
  // auto-close after 3 seconds
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm w-full">
        <p className="text-lg font-medium text-gray-800">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
