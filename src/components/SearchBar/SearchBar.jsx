import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const SearchBar = ({ value, onChange, onSearch, placeholder = 'Search...', buttonLabel = 'Search' }) => {
  return (
    <div className="search-bar">
      <Input 
        type="text" 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
      />
      <Button label={buttonLabel} onClick={onSearch} />
    </div>
  );
};

export default SearchBar;