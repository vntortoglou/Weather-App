import React, { useState } from "react";

function SearchBar({ setCity }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim()) {
      setCity(inputValue);
      setInputValue("");
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button> {}
    </form>
  );
}

export default SearchBar;
