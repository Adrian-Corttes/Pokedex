import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import CardPokemon from "../components/CardPokemon";
import Loader from "../components/Loader";

const PokemonList = () => {
  const { FiftyPokémons, loading } = useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="card-list-pokemon container">
          {FiftyPokémons.map((pokemon) => (
            <CardPokemon pokemon={pokemon} key={pokemon.id} />
          ))}
        </main>
      )}
    </>
  );
};

export default PokemonList;
