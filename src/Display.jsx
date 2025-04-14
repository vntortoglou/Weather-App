import React, { useState } from "react";

const Display = ({ weatherData, onAddToFavorites }) => {
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  if (!weatherData) return null;

  const { city, temperature, description, humidity, windSpeed, icon } =
    weatherData;

  const displayTemp = isFahrenheit ? (temperature * 9) / 5 + 32 : temperature;
  const unit = isFahrenheit ? "°F" : "°C";

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <img src={icon} alt={description} />
      <p>
        <strong>Temperature:</strong> {displayTemp.toFixed(1)}
        {unit}
        <button onClick={() => setIsFahrenheit(!isFahrenheit)}>
          Switch to {isFahrenheit ? "°C" : "°F"}
        </button>
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Humidity:</strong> {humidity}%
      </p>
      <p>
        <strong>Wind Speed:</strong> {windSpeed} m/s
      </p>
      <button onClick={onAddToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default Display;
