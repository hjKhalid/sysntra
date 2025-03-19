import { useState, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { currentWeather } from "../store/weatherSlice";

const SearchBar = ({
  onSearch,
  delay = 300,
  placeholder = "Search...",
  className = "",
  size = "md",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentWeather(searchTerm?searchTerm:"delhi"));
  }, [searchTerm, dispatch]);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch && onSearch(searchTerm);
    }, delay);

    return () => clearTimeout(handler);
  }, [searchTerm, delay, onSearch]);

  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-5 text-base",
    lg: "py-4 px-6 text-lg",
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch
          className={`w-5 h-5 ${isFocused ? "text-blue-500" : "text-gray-400"}`}
        />
      </div>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={`
          w-full rounded-lg border transition-all
          ${sizeClasses[size]}
          ${
            isFocused
              ? "border-blue-500 ring-2 ring-blue-200"
              : "border-gray-300"
          }
          focus:outline-none focus:ring-2 focus:ring-blue-500
          dark:bg-gray-800 dark:border-gray-600 dark:text-white
          dark:focus:ring-blue-600 dark:focus:border-blue-500
          pr-10 pl-10
        `}
      />

      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          aria-label="Clear search"
        >
          <FiX className="w-5 h-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
        </button>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  delay: PropTypes.number,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default SearchBar;
