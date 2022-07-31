import { useState } from 'react';

export default function SearchForm({ onSubmit }) {
  const [beerName, setBeerName] = useState('');

  const handleNameChange = event => {
    setBeerName(event.target.value.toLowerCase());
  };

  const handleNameSubmit = event => {
    event.preventDefault();

    if (beerName.trim() === '') {
      // toastify('Press the name of the movie');
      return;
    }
    onSubmit(beerName);
    setBeerName('');
  };

  return (
    <>
      {
        <form onSubmit={handleNameSubmit}>
          <button type="submit">search</button>
          <input
            onChange={handleNameChange}
            value={beerName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter the name of the beer"
          />
        </form>
      }
    </>
  );
}
