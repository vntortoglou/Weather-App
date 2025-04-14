// components/Favorites.jsx
import React, { useState } from "react";

const Favorites = ({ favorites, onRemoveFavorite }) => {
  const [toggleStates, setToggleStates] = useState({});

  const toggleTemp = (city) => {
    setToggleStates((prev) => ({
      ...prev,
      [city]: !prev[city],
    }));
  };

  const convertTemp = (tempC, isFahrenheit) =>
    isFahrenheit ? (tempC * 9) / 5 + 32 : tempC;

  return (
    <div className="favorites-container">
      <h2>Favorite Cities</h2>

      {favorites.length === 0 ? (
        <p>No favorites added.</p>
      ) : (
        favorites.map((fav, index) => {
          const isFahrenheit = toggleStates[fav.city] || false;
          const unit = isFahrenheit ? "°F" : "°C";
          const temp = convertTemp(fav.temperature, isFahrenheit).toFixed(1);

          return (
            <div key={index} className="weather-card">
              <h3>{fav.city}</h3>
              <img src={fav.icon} alt={fav.description} />
              <p>
                <strong>Temperature:</strong> {temp}
                {unit}
                <button onClick={() => toggleTemp(fav.city)}>
                  Switch to {isFahrenheit ? "°C" : "°F"}
                </button>
              </p>
              <p>
                <strong>Description:</strong> {fav.description}
              </p>
              <p>
                <strong>Humidity:</strong> {fav.humidity}%
              </p>
              <p>
                <strong>Wind Speed:</strong> {fav.windSpeed} m/s
              </p>
              <button onClick={() => onRemoveFavorite(fav.city)}>Remove</button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Favorites;
