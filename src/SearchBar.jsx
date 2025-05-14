import React, { useState } from "react";

function SearchBar({ setCity }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setCity(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-[#ffffff1a] bg-[#2e2a34]/50 backdrop-blur-md shadow-md"
    >
      <input
        type="text"
        placeholder="Search city…"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow px-4 py-3 rounded-lg bg-[#3c3742]/70 border border-[#ffffff1a] text-[#FDF6F0] placeholder-[#FDF6F0]/50 focus:outline-none focus:ring-2 focus:ring-[#FFB07C]/40 transition-all"
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3 font-semibold rounded-lg border border-[#ffffff1a] text-[#FDF6F0] bg-[#1e1b24]/80 hover:brightness-110 transition-all duration-200"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
