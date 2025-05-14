import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from './SearchBar'; // assuming it's in the same directory as App.jsx
import Display from "./Display";
import Favorites from "./Favorites";

const App = () => {
  /* ---------------- state ---------------- */
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const apiKey = "b1a33d8669032f31d2aa1fbc63fb17c7";

  /* ---------------- helpers ---------------- */
  const fetchWeatherData = async (cityName) => {
    try {
      // Get current weather
      const currentResponse = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: cityName,
            units: "metric",
            appid: apiKey,
          },
        }
      );

      // Get forecast weather
      const forecastResponse = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
          params: {
            q: cityName,
            units: "metric",
            cnt: 7,
            appid: apiKey,
          },
        }
      );

      const current = currentResponse.data;
      const forecast = forecastResponse.data.list;

      return {
        current: {
          city: cityName,
          temperature: current.main.temp,
          feels_like: current.main.feels_like,
          description: current.weather[0].description,
          humidity: current.main.humidity,
          windSpeed: current.wind.speed,
          sunrise: current.sys.sunrise,
          sunset: current.sys.sunset,
          icon: `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
        },
        forecast: forecast.slice(1).map((day) => ({
          temperature: day.main.temp,
          feels_like: day.main.feels_like,
          description: day.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
          dt: day.dt,
        })),
      };
    } catch (err) {
      console.error("Error fetching weather data:", err);
      return null;
    }
  };

  /* ---------------- lifecycle ---------------- */
  useEffect(() => {
    (async () => {
      const stored = JSON.parse(localStorage.getItem("weatherFavorites") || "[]");
      const refreshed = await Promise.all(
        stored.map(async (fav) => {
          const fullData = await fetchWeatherData(fav.city);
          return fullData ? fullData.current : fav;
        })
      );
      setFavorites(refreshed);
      handleCityChange(city);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("weatherFavorites", JSON.stringify(favorites));
  }, [favorites]);

  /* ---------------- actions ---------------- */
  const handleCityChange = async (cityName) => {
    setCity(cityName);
    const data = await fetchWeatherData(cityName);
    if (data) {
      setWeatherData(data);
      setError(null);
    } else {
      setWeatherData(null);
      setError("City not found or API error");
    }
  };

  const addToFavorites = () => {
    if (
      weatherData &&
      !favorites.some(
        (fav) => fav.city.toLowerCase() === weatherData.current.city.toLowerCase()
      )
    ) {
      setFavorites((prev) => [...prev, weatherData.current]);
    }
  };

  const removeFromFavorites = (cityName) =>
    setFavorites((prev) => prev.filter((fav) => fav.city !== cityName));

  /* ---------------- render ---------------- */
  return (
   <div className="min-h-screen bg-gradient-to-b from-[#FF9472] via-[#F2709C] to-[#1B2735] p-6 text-[#FDF6F0]">

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#EEF2F5]">
        Weather App
      </h1>

      <div className="max-w-[1400px] mx-auto flex flex-col gap-8">

        <div className="flex flex-col gap-8">
          <SearchBar setCity={handleCityChange} />
          {error && (
            <p className="text-[#CFC1B4] text-center font-medium">{error}</p>
          )}
          <Display
            weatherData={weatherData}
            onAddToFavorites={addToFavorites}
          />
        </div>

        {/* Move Favorites below Display */}
        <Favorites
          favorites={favorites}
          onRemoveFavorite={removeFromFavorites}
        />
      </div>
    </div>
  );
};

export default App;
