import React, { useState } from "react";
import CityDetails from "./CityDetails";
import WeatherStats from "./WeatherStats";
import SunriseSunset from "./SunriseSunset";
import Forecast from "./Forecast";

const Display = ({ weatherData, onAddToFavorites }) => {
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  if (!weatherData) return null;

  const { current, forecast } = weatherData;

  const toF = (c) => (c * 9) / 5 + 32;
  const unit = isFahrenheit ? "°F" : "°C";
  const disp = (temp) => (isFahrenheit ? toF(temp) : temp);
  const tsToTime = (ts) =>
    new Date(ts * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const getDayName = (index) => {
    const today = new Date();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayIndex = (today.getDay() + index) % 7;
    return daysOfWeek[dayIndex];
  };

  const handleToggleUnit = () => {
    setIsFahrenheit((prev) => !prev);
  };

  return (
   <div className="w-full mx-auto p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-[#FFDAB9]/40 shadow-lg shadow-[#0D1B2A]/50 text-[#FDF6F0] flex flex-col gap-6 relative">

      {/* Top Section: 4 Columns */}
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        {/* City, Icon, Description, Temp, Switch */}
        <CityDetails
          city={current.city}
          icon={current.icon}
          description={current.description}
          temperature={current.temperature}
          feels_like={current.feels_like}
          unit={unit}
          disp={disp}
          onToggleUnit={handleToggleUnit}
          isFahrenheit={isFahrenheit}
        />

        {/* Humidity & Wind Speed */}
        <WeatherStats humidity={current.humidity} windSpeed={current.windSpeed} />

        {/* Sunrise & Sunset */}
        <SunriseSunset sunrise={current.sunrise} sunset={current.sunset} tsToTime={tsToTime} />

        {/* 7-Day Forecast */}
        <Forecast forecast={forecast} getDayName={getDayName} disp={disp} unit={unit} />
      </div>

      {/* Add to Favorites Button */}
      <div className="flex justify-end items-end md:mr-[5%] w-full">
<button
  onClick={onAddToFavorites}
  className="px-6 py-3 font-semibold rounded-lg bg-[#1e1b24]/50 text-[#FDF6F0] border border-[#3a3540] shadow-md hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#FF758C]/50 transition-all duration-200"
>
  Add to Favorites
</button>











      </div>
    </div>
  );
};

export default Display;
