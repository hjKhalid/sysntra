const Spinner = ({ size = "md", color = "blue" }) => {
  // Size mapping
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  // Color mapping
  const colorClasses = {
    blue: "text-blue-500",
    gray: "text-gray-500",
    red: "text-red-500",
    green: "text-green-500",
    white: "text-white",
  };

  return (
    <div
      className={`inline-block ${sizeClasses[size]} ${colorClasses[color]}  animate-spin rounded-full border-4 border-solid border-current border-t-transparent`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
