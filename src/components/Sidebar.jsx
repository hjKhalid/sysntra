import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiPieChart, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`bg-gray-800 text-white ${
        isCollapsed ? "w-16" : "w-64"
      } transition-all duration-300`}
    >
      <div className="p-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-2xl hover:text-gray-300"
        >
          {isCollapsed ? "»" : "«"}
        </button>
      </div>
      <nav  >
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex items-center p-4  hover:bg-gray-700">
              <FiHome className="mr-4" size={26} />
              {!isCollapsed && "Dashboard"}
            </Link>
          </li>
          <li>
            <Link
              to="/reports"
              className="flex items-center p-4 hover:bg-gray-700"
            >
              <FiPieChart className="mr-4" size={24} />
              {!isCollapsed && "Reports"}
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center p-4 hover:bg-gray-700"
            >
              <FiSettings className="mr-4" size={24} />
              {!isCollapsed && "Settings"}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
