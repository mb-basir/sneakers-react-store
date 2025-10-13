import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Search() {
  const [active, setActive] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <motion.div
        layout
        transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
        className={`flex items-center gap-2 bg-indigo-400 p-2 rounded-full ${
          active ? "w-64" : "w-10"
        }`}
      >
        <motion.svg
          key="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="22"
          height="22"
          onClick={() => setActive((prev) => !prev)}
          initial={{ rotate: 0 }}
          animate={{ rotate: active ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <path
            d="M13 3C7.4889971 3 3 7.4889971 3 13C3 18.511003 7.4889971 23 13 23C15.396508 23 17.597385 22.148986 19.322266 20.736328L25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969L20.736328 19.322266C22.148986 17.597385 23 15.396508 23 13C23 7.4889971 18.511003 3 13 3 z M 13 5C17.430123 5 21 8.5698774 21 13C21 17.430123 17.430123 21 13 21C8.5698774 21 5 17.430123 5 13C5 8.5698774 8.5698774 5 13 5 z"
            fill="#ffffff"
          />
        </motion.svg>

        <AnimatePresence>
          {active && (
            <>
              <motion.input
                key="input"
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent outline-none text-white placeholder-white"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                autoFocus
              />
              <motion.button
                key="close"
                className="h-8 w-8 bg-indigo-500 rounded-full text-white flex items-center justify-center"
                onClick={() => setActive(false)}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                ❌
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Search;
