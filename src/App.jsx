import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";
import AIAssistant from "./components/AIAssistant";
const API_KEY = "67b817ac238d753e9b878dbf6424ab85";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastCity, setLastCity] = useState(localStorage.getItem("lastCity") || "");

  useEffect(() => {
    if (lastCity) fetchWeather(lastCity);
  }, []);

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");
      // Current Weather
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);

      // Forecast
      const resForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const forecastData = await resForecast.json();
      const daily = forecastData.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      const formatted = daily.map((item) => ({
        date: new Date(item.dt_txt).toLocaleDateString("en-US", {
          weekday: "short",
        }),
        temp: Math.round(item.main.temp),
        desc: item.weather[0].description,
        icon: item.weather[0].icon,
      }));
      setForecast(formatted);

      // Save last city
      setLastCity(cityName);
      localStorage.setItem("lastCity", cityName);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city);
  };

  // ✅ Clear button handler
  const handleClear = () => {
    setCity("");
    setWeather(null);
    setForecast([]);
    setError("");
    setLoading(false);
    setLastCity("");
    localStorage.removeItem("lastCity");
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-100">
      <Header />
      <main className="flex-grow flex flex-col items-center p-6">
        <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
        
        {/* Clear Button */}
        <button
          onClick={handleClear}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Clear
        </button>

        {loading && <p className="mt-4">Loading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {weather && <WeatherDisplay weather={weather} />}
        {forecast.length > 0 && <Forecast forecast={forecast} />}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
