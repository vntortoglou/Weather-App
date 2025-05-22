React Weather App
This is a responsive and modern weather application built with React and Tailwind CSS. It allows users to search for any city, view current weather conditions, a 7-day forecast, and manage a list of favorite cities. Users can also toggle between Celsius and Fahrenheit units.

Project Overview
This app includes:

Real-time weather data (temperature, humidity, wind speed, sunrise and sunset)

7-day weather forecast

City search functionality

Favorite cities list with full weather details

Toggle between Celsius and Fahrenheit

Responsive, clean neobrutalist-inspired UI

Built With
React

Tailwind CSS

Vite

OpenWeatherMap API

LocalStorage (for saving favorites)

How to Run the Project Locally
1. Clone the repository
git clone https://github.com/yourusername/react-weather-app.git
cd react-weather-app

2. Install dependencies
npm install

3. Create a .env file in the root folder
Add your OpenWeatherMap API key like this:
VITE_API_KEY=your_openweathermap_api_key

4. Run the project
npm run dev

5. Open in browser
Visit http://localhost:5173

Project Structure :

src/
├── components/
│   ├── CityDetails.jsx
│   ├── WeatherStats.jsx
│   ├── SunriseSunset.jsx
│   ├── Forecast.jsx
│   ├── SearchBar.jsx
│   ├── Favorites.jsx
│   ├── FavoriteCard.jsx
│   └── SwitchButton.jsx
├── App.jsx
├── main.jsx
└── index.css