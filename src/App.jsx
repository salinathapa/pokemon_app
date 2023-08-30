import React, { useState } from 'react';
import { PokemonForm, PokemonData } from './components';

function App() {
  const [pokemonName, setPokemonName] = useState('');

  const handleSearch = (name) => {
    setPokemonName(name);
  };

  return (
    <div className="App">
      <PokemonForm onSearch={handleSearch} />
      <PokemonData pokemonName={pokemonName} />
    </div>
  );
}

export default App;
