function Forecast({ forecast }) {
  const today = new Date().toLocaleDateString("en-US", { weekday: "short" });

  return (
    <div className="mt-6 w-full max-w-5xl px-4">
      <h3 className="text-xl font-bold mb-4 text-gray-700">5-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {forecast.map((day, index) => {
          const isToday = day.date === today;

          return (
            <div
              key={index}
              className={`
                bg-white 
                rounded-xl 
                p-4 
                shadow-md 
                text-center 
                transition-transform 
                hover:scale-105
                ${isToday ? "border-4 border-blue-500 bg-blue-50" : ""}
              `}
            >
              <p className={`font-semibold mb-2 ${isToday ? "text-blue-600" : "text-gray-700"}`}>
                {day.date}{isToday ? " (Today)" : ""}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt="icon"
                className="mx-auto mb-2"
              />
              <p className={`text-2xl font-bold mb-1 ${isToday ? "text-blue-600" : "text-gray-800"}`}>
                {day.temp}°C
              </p>
              <p className={`text-sm capitalize ${isToday ? "text-blue-500" : "text-gray-500"}`}>
                {day.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
