import React, { useState, useEffect, ChangeEvent } from 'react';

const LSName = 'searchValue';

const getInitialValue = () => {
  let val;
  const LSValue = localStorage.getItem(LSName);
  if (LSValue) {
    val = LSValue;
  } else val = '';
  return val;
};

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>(() => getInitialValue());

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  useEffect(() => {
    localStorage.setItem(LSName, searchValue);
  }, [searchValue]);

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
