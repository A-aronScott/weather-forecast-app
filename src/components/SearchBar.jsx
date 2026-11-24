import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [cityInput, setCityInput] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedCity = cityInput.trim();
    if (trimmedCity === '') return;
    onSearch(trimmedCity);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={cityInput}
        onChange={(event) => setCityInput(event.target.value)}
        placeholder="Enter a city name"
        aria-label="City name"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
