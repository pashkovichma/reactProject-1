import React, { useState, ChangeEvent } from 'react';

const LSName = 'searchValue';

const getInitialValue = () => {
  return localStorage.getItem(LSName) || '';
};

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>(() => getInitialValue());

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    localStorage.setItem(LSName, value);
  };

  return (
    <div className="search">
      <input
        className="input search__input"
        type="search"
        value={searchValue}
        placeholder="..."
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
