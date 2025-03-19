import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";

const WeatherWidget = () => {
  const { weather, status, error } = useSelector((state) => state.weather);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <SearchBar />

      {status === "loading" && (
        <div className="m-10 p-10 flex justify-center">
          <Spinner size="xl" color="blue" />
        </div>
      )}

      {status === "failed" && (
        <div className="text-red-500 text-center mt-4">
          {error || "Failed to fetch weather data"}
        </div>
      )}

      {status === "succeeded" && weather && weather.main && weather.weather && (
        <>
          <h1 className="flex justify-center mt-5 text-2xl font-bold">
            <div className="pt-2">{weather?.name}</div>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="Weather icon"
                className="ml-3"
              />
            </div>
          </h1>

          <div className="flex justify-between items-center mt-4">
            <h1 className="text-2xl font-bold">Temp:</h1>

            <div className="ml-3">
              <p className="  text-xl font-bold ">
                {Math.round(weather.main.temp)}°K
              </p>
              <p className="text-gray-600">{weather.weather[0].description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherWidget;
