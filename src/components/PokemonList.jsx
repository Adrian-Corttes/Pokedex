import React, { useContext } from "react";
import { PokemonContex } from "../context/PokemonContex";
import CardPokemon from "../components/CardPokemon";

const PokemonList = () => {
  const { FiftyPokémons } = useContext(PokemonContex);

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
