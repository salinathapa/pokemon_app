import React, { useState, useEffect } from 'react';

const PokemonData = ({ pokemonName }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchPokemonData() {
    setIsLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (pokemonName) {
      fetchPokemonData();
    }
  }, [pokemonName]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {pokemonData ? (
        <div>
          <h3>{pokemonData.name}</h3>
          <img
            src={pokemonData.sprites.front_default}
            alt={`Sprite of ${pokemonData.name}`}
          />
          <div>
            <strong>Height:</strong> {pokemonData.height}
          </div>
          <div>
            <strong>Weight:</strong> {pokemonData.weight}
          </div>
        </div>
      ) : (
        <div>No Pokemon yet, please submit a Pokemon!</div>
      )}
    </div>
  );
};

export default PokemonData;
