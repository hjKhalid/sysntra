import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { FiSun, FiMoon } from "react-icons/fi";

const TopBar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 p-4 flex justify-end">
        <h1 className="text-2xl  mr-[500px] justify-start text-center font-bold ">Weather App</h1>

        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {theme === "light" ? <FiMoon size={24} /> : <FiSun size={24} />}
        </button>
      </div>
    </>
  );
};

export default TopBar;
