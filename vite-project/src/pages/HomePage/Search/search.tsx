import { useState } from 'react';
import { setQuery } from '../../../store/searchSlice';
import { useAppSelector, useAppDispatch } from '../../../store/hooks/redux';

function SearchInput() {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.search.query);
  const [searchBarValue, setSearchBarValue] = useState(query);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchBarValue(event.target.value);
  };

  const handleClearClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setSearchBarValue('');
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch(setQuery(searchBarValue));
  };

  return (
    <form className="search" onSubmit={handleFormSubmit}>
      <input
        className="input search__input"
        type="search"
        value={searchBarValue}
        placeholder="..."
        onChange={handleChange}
      />
      <button className="button search-button">search</button>
      <button className="button clear-button" onClick={handleClearClick}>
        clear
      </button>
    </form>
  );
}

export default SearchInput;
