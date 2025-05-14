import React from 'react';

const SwitchButton = ({ onToggleUnit, isFahrenheit }) => (
  <button
    onClick={onToggleUnit}
    className="mt-4 px-5 py-2 text-sm text-[#EEF2F5] border border-[#EEF2F5]/40 rounded-lg hover:border-[#EEF2F5] transition-all w-36"
  >
    Switch to {isFahrenheit ? "°C" : "°F"}
  </button>
);

export default SwitchButton;
