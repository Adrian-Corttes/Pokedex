import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import CardPokemon from "../components/CardPokemon";

const PokemonList = () => {
  const { FiftyPokémons } = useContext(PokemonContext);

  return (
    <>
      <main className="card-list-pokemon container">
        {FiftyPokémons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </main>
    </>
  );
};

export default PokemonList;
