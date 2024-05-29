import React, { useEffect, useState } from "react";
import { PokemonContex } from "./PokemonContex";
import useForm from "../Hooks/useForm";

//Provider
const PokemonProvider = ({ children }) => {
  const [FiftyPokémons, setFiftyPokémons] = useState([]);
  const [allPokemos, setAllPokemos] = useState([]);
  const [offset, setOffset] = useState(0);

  //CustomHook - useForm
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  //Llamada a la API. (50 pokemones)
  const FirstFiftyPokemons = async (limit = 50) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(
      `${baseURL}pokemon?offset=${offset}&limit=${limit}`
    );
    const data = await res.json();
    //console.log(data);

    //LLamada a la API, pokemons Individuales.
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();

      return data;
    });

    const results = await Promise.all(promises);

    setFiftyPokémons([...FiftyPokémons, ...results]);
    setLoading(false);
  };

  //Llamada a la API (All pokemons)
  const getAllPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon?offset=0&limit=100000`);
    const data = await res.json();
    //console.log(data);

    //LLamada a la API, pokemons Individuales.
    const promises = data.results.map(async (pokemon) => {
      //const res = await fetch(pokemon.url);
      //const data = await res.json();

      return data;
    });

    const results = await Promise.all(promises);

    setAllPokemos(results);
    setLoading(false);
  };

  //Llamada a la API,(Por ID)
  const getPokemonByID = async () => {
    const res = await fetch(`${baseURL}pokemon${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    FirstFiftyPokemons();
  }, []);

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokemonContex.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        FiftyPokémons,
        allPokemos,
        getPokemonByID
      }}
    >
      {children}
    </PokemonContex.Provider>
  );
};

export default PokemonProvider;
