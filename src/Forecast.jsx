import React from 'react';

const Forecast = ({ forecast, getDayName, disp, unit }) => (
  <div className="flex flex-col gap-12 md:w-1/4 items-center">
    {forecast.slice(0, 7).map((day, index) => (
      <div key={index} className="flex items-center justify-center gap-4 w-full">
        <div className="flex items-center gap-2">
          <p className="text-lg text-[#EEF2F5] font-semibold w-14 text-center">
            {getDayName(index + 1)}
          </p>
          <img src={day.icon} alt={day.description} className="w-10 h-10" />
        </div>

        <div className="flex items-baseline gap-1 min-w-[55px]">
          <p className="text-lg text-[#EEF2F5]">
            {disp(day.temperature).toFixed(1)}
          </p>
          <span className="text-md text-[#EEF2F5]">{unit}</span>
        </div>
      </div>
    ))}
  </div>
);

export default Forecast;
