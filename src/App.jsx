import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Display from "./Display";
import Favorites from "./Favorites";

const App = () => {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("weatherFavorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("weatherFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const fetchWeatherData = async (cityName) => {
    const apiKey = "b1a33d8669032f31d2aa1fbc63fb17c7";

    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: cityName,
            units: "metric",
            appid: apiKey,
          },
        }
      );

      const {
        name,
        main: { temp, humidity },
        weather,
        wind: { speed: windSpeed },
      } = response.data;

      const weatherDescription = weather[0].description;
      const weatherIcon = weather[0].icon;

      return {
        city: name,
        temperature: temp,
        description: weatherDescription,
        humidity,
        windSpeed,
        icon: `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`,
      };
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  };

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
        (fav) => fav.city.toLowerCase() === weatherData.city.toLowerCase()
      )
    ) {
      setFavorites((prev) => [...prev, weatherData]);
    }
  };

  const removeFromFavorites = (cityName) => {
    setFavorites((prev) => prev.filter((fav) => fav.city !== cityName));
  };

  useEffect(() => {
    const fetchInitialWeather = async () => {
      if (city) {
        const data = await fetchWeatherData(city);
        if (data) {
          setWeatherData(data);
          setError(null);
        } else {
          setWeatherData(null);
          setError("City not found or API error");
        }
      }
    };

    fetchInitialWeather();
  }, [city]);

  return (
    <div className="app-container">
      <h1>Weather Widget</h1>
      <SearchBar setCity={handleCityChange} />
      <Display weatherData={weatherData} onAddToFavorites={addToFavorites} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Favorites favorites={favorites} onRemoveFavorite={removeFromFavorites} />
    </div>
  );
};

export default App;
