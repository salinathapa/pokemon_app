import React, { useState } from 'react';

const PokemonForm = ({ onSearch }) => {
  const [pokemonName, setPokemonName] = useState('');

  const handleSearch = () => {
    onSearch(pokemonName);
  };

  return (
    <div>
      <h2>Pokemon Search</h2>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokemon Name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default PokemonForm;