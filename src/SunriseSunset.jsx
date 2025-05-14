import React from 'react';

const SunriseSunset = ({ sunrise, sunset, tsToTime }) => (
  <div className="flex flex-col items-center md:w-1/4 gap-24">
    <div className="text-center text-[#EEF2F5] mt-30">
      <p className="text-3xl font-semibold">Sunrise</p>
      <p className="text-4xl">{tsToTime(sunrise)}</p>
    </div>
    <div className="text-center text-[#EEF2F5]">
      <p className="text-3xl font-semibold">Sunset</p>
      <p className="text-4xl">{tsToTime(sunset)}</p>
    </div>
  </div>
);

export default SunriseSunset;
