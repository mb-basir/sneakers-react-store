import { useState } from "react";
import { motion } from "framer-motion";

function Search() {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      className="flex items-center justify-center"
      initial={false}
      animate={{
        width: active ? 260 : 48,
        backgroundColor: active ? "rgb(99 102 241)" : "rgb(129 140 248)",
        borderRadius: active ? "9999px" : "9999px",
      }}
      transition={{
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        overflow: "visible",
        padding: "0.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      {/* Search Icon */}
      <motion.div
        animate={{ opacity: active ? 0.6 : 1, scale: active ? 0.9 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="22"
          height="22"
          fill="#fff"
        >
          <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10c2.397 0 4.598-.851 6.323-2.264l5.97 5.97a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.963 9.963 0 0 0 23 13c0-5.511-4.489-10-10-10zM13 5c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z" />
        </svg>
      </motion.div>

      {/* Input Field */}
      {active && (
        <motion.input
          key="input"
          type="text"
          placeholder="Search"
          autoFocus
          onBlur={() => setActive(false)}
          className="flex-1 bg-transparent outline-none text-white placeholder-white"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.25 }}
        />
      )}

      {/* X button (always visible when active) */}
      {active && (
        <motion.button
          key="close"
          onClick={() => setActive(false)}
          whileTap={{ scale: 0.85 }}
          className="h-8 w-8 bg-indigo-700 rounded-full text-white flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
        >
          ✕
        </motion.button>
      )}

      {/* Click overlay (when inactive) */}
      {!active && (
        <motion.button
          key="activate"
          className="absolute h-10 w-10 rounded-full"
          onClick={() => setActive(true)}
          style={{ background: "transparent" }}
        />
      )}
    </motion.div>
  );
}

export default Search;
