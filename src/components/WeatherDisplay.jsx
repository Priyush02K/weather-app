import React from "react";

function WeatherDisplay({ weather }) {
  if (!weather) return null;

  return (
    <div className="mt-8 w-full max-w-sm bg-gradient-to-b from-indigo-100 via-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 text-center border border-indigo-200">
      
      {/* City Name */}
      <h2 className="text-2xl font-bold text-indigo-700 mb-1 tracking-wide">
        {weather.name}
      </h2>

      {/* Weather Icon */}
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto w-20 h-20"
      />

      {/* Description */}
      <p className="capitalize text-lg text-gray-700 font-medium mb-2">
        {weather.weather[0].description}
      </p>

      {/* Temperature */}
      <p className="text-4xl font-extrabold text-indigo-800 mb-1">
        {Math.round(weather.main.temp)}°C
      </p>

      {/* Extra Info */}
      <div className="flex justify-center gap-6 mt-3 text-gray-600">
        <p className="flex items-center gap-1">
          💧 <span className="font-semibold">{weather.main.humidity}%</span>
        </p>
        <p className="flex items-center gap-1">
          🌬️ <span className="font-semibold">{weather.wind.speed} m/s</span>
        </p>
      </div>

    </div>
  );
}

export default WeatherDisplay;
