import React from 'react';

const WeatherStats = ({ humidity, windSpeed }) => (
  <div className="flex flex-col items-center md:w-1/4 gap-24">
    <div className="text-center text-[#EEF2F5] mt-30">
      <p className="text-3xl font-semibold">Humidity</p>
      <p className="text-4xl">{humidity}%</p>
    </div>
    <div className="text-center text-[#EEF2F5]">
      <p className="text-3xl font-semibold">Wind Speed</p>
      <p className="text-4xl">{windSpeed} m/s</p>
    </div>
  </div>
);

export default WeatherStats;
