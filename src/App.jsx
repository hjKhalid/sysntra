import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <Provider store={store}>
      <Router>
        <div className="flex min-h-screen min-w-screen">
          <Sidebar />
          <div 
          // className={`${theme === "dark" ? "bg-gray-500" : null}`}
          className={`flex-1 ${theme === "dark" ? "bg-gray-400" : null}`}
          >
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/reports" element={<div>Reports Page</div>} />
              <Route path="/settings" element={<div>Settings Page</div>} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
