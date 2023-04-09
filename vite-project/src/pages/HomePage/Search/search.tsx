import React, { useState, ChangeEvent, useRef, useEffect } from 'react';

const LSName = 'searchValue';

const getInitialValue = () => {
  return localStorage.getItem(LSName) || '';
};

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>(() => getInitialValue());

  const searchValueRef = useRef('');

  useEffect(() => {
    return () => {
      localStorage.setItem(LSName, searchValueRef.current || '');
    };
  }, []);

  useEffect(() => {
    searchValueRef.current = searchValue;
  }, [searchValue]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
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
