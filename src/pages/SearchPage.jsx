import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useLocation } from "react-router-dom";
import CardPokemon from "../components/CardPokemon"

const SearchPage = () => {
  const location = useLocation();
  const { allPokemos } = useContext(PokemonContext);
  

  const filteredPokemons = allPokemos.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  console.log(filteredPokemons);

  return (
    <div className="container">
      <p className="p-search">
        Se encontraron <span>{filteredPokemons.length}</span> resultados:
      </p>

      <div className="card-list-pokemon container">
        {filteredPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
