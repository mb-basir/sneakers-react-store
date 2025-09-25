function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  ...props
}) {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-medium focus:outline-none transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed";

  // Variants (themes)
  const variants = {
    primary:
      "bg-red-300 text-white hover:bg-red-400 hover:shadow-md disabled:hover:bg-orange-400",
    secondary:
      "bg-indigo-300 text-gray-800 hover:text-white hover:bg-indigo-400 hover:shadow-md disabled:hover:bg-indigo-300 disabled:hover:text-gray-800",
    outline:
      "border border-gray-400 text-gray-800 hover:bg-gray-100 hover:shadow-md disabled:hover:bg-transparent",
    danger:
      "bg-red-400 text-white hover:bg-red-500 hover:shadow-md disabled:hover:bg-red-400",
  };

  // Sizes
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
