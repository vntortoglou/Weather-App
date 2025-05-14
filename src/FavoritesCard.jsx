import React, { useState } from "react";

const FavoriteCard = ({ fav, onRemoveFavorite }) => {
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  const flip = () => setIsFahrenheit((prev) => !prev);
  const toF = (celsius) => (celsius * 9) / 5 + 32;
  const unit = isFahrenheit ? "°F" : "°C";
  const temp = (isFahrenheit ? toF(fav.temperature) : fav.temperature).toFixed(1);
  const feels = (isFahrenheit ? toF(fav.feels_like) : fav.feels_like).toFixed(1);

  const tsToTime = (timestamp) =>
    new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
<div className="bg-[#3a353f]/60 border border-[#FFDAB9]/40 rounded-2xl text-[#FDF6F0] shadow-xl backdrop-blur-md p-6 flex flex-col gap-4">
  {/* City Name */}
  <h3 className="text-3xl font-bold text-center mb-2">{fav.city}</h3>

  {/* Icon */}
  <div className="flex justify-center mb-2">
    <img src={fav.icon} alt={fav.description} className="w-16 h-16" />
  </div>

  {/* Description */}
  <div className="text-xl text-center capitalize mb-2">
    {fav.description}
  </div>

  {/* Temperature (Celsius) */}
  <div className="text-4xl text-center mb-2">
    {temp} {unit}
  </div>

  {/* Feels Like */}
  <div className="text-lg text-center mb-4">
    <span className="italic">({feels} {unit})</span>
  </div>

  {/* Toggle Button */}
  <div className="flex justify-center mb-4">
    <button
      onClick={flip}
      className="px-4 py-2 text-xs font-medium border border-[#FFDAB9] rounded-md hover:border-[#FFB07C] transition"
    >
      Switch to {isFahrenheit ? "Celsius" : "Fahrenheit"}
    </button>
  </div>

  {/* Humidity & Wind Speed */}
  <div className="flex justify-between mb-4">
    <div className="text-sm">
      <strong>Humidity:</strong> {fav.humidity}%
    </div>
    <div className="text-sm">
      <strong>Wind Speed:</strong> {fav.windSpeed} m/s
    </div>
  </div>

  {/* Sunrise & Sunset */}
  <div className="flex justify-between mb-4">
    <div className="text-sm">
      <strong>Sunrise:</strong> {tsToTime(fav.sunrise)}
    </div>
    <div className="text-sm">
      <strong>Sunset:</strong> {tsToTime(fav.sunset)}
    </div>
  </div>

  {/* Remove Button */}
  <button
    onClick={() => onRemoveFavorite(fav.city)}
    className="w-full py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#FFB07C] to-[#FF758C] text-[#1B1B1B] border border-[#FDF6F0]/40 hover:brightness-110 transition"
  >
    Remove
  </button>
</div>


  );
};

export default FavoriteCard;
