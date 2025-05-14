import React from "react";
import SwitchButton from "./SwitchButton";

const CityDetails = ({
  city,
  icon,
  description,
  temperature,
  feels_like,
  unit,
  disp,
  onToggleUnit,
  isFahrenheit,
}) => (
  <div className="flex flex-col items-center md:w-1/4 gap-4">
    <h2 className="text-6xl font-bold text-[#EEF2F5]">{city}</h2>
    <img src={icon} alt={description} className="w-42 h-42 md:w-42 md:h-42" />
    <p className="text-[#EEF2F5]/80 text-4xl capitalize">{description}</p>

    <div className="flex flex-col gap-2 items-center">
      <div className="flex items-baseline gap-1">
        <p className="text-8xl font-bold text-[#EEF2F5]">
          {disp(temperature).toFixed(1)}
        </p>
        <span className="text-4xl text-[#EEF2F5]">{unit}</span>
      </div>
      <p className="text-lg text-[#EEF2F5]/80 text-center">
        ( Feels like {disp(feels_like).toFixed(1)} {unit} )
      </p>
    </div>

    <SwitchButton onToggleUnit={onToggleUnit} isFahrenheit={isFahrenheit} />
  </div>
);

export default CityDetails;
