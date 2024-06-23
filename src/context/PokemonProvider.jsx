import React, { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import useForm from "../Hooks/useForm";

//Provider
const PokemonProvider = ({ children }) => {
  const [FiftyPokémons, setFiftyPokémons] = useState([]);
  const [allPokemos, setAllPokemos] = useState([]);
  const [offset, setOffset] = useState(0);

  //CustomHook - useForm (Formulario de busqueda)
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  //Carga
  const [loading, setLoading] = useState(true);
  //Filtrado
  const [active, setActive] = useState(false);

  //Llamada a la API. (50 pokemones)
  const FirstFiftyPokemons = async (limit = 50) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(
      `${baseURL}pokemon?offset=${offset}&limit=${limit}`
    );
    const data = await res.json();

    //LLamada a la API, pokemons Individuales.
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();

      return data;
    });

    //Desestructuramos la data (promises)
    const results = await Promise.all(promises);

    setFiftyPokémons([...FiftyPokémons, ...results]);
    setLoading(false);
  };

  //Llamada a la API (Todos los pokemon)
  const getAllPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon?offset=0&limit=100000`);
    const data = await res.json();

    //LLamada a la API, pokemons Individuales.
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();

      return data;
    });

    const results = await Promise.all(promises);

    setAllPokemos(results);
    setLoading(false);
  };

  //Llamada a la API,(Por ID)
  const getPokemonByID = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    FirstFiftyPokemons();
  }, [offset]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  //Btn Cargar mas
  const onClickLoadMore = () => {
    setOffset(offset + 50);
  };

  //fliter functión + state
  const [typeSelected, setTypeSelected] = useState({
    grass: false,
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknow: false,
    shadow: false,
  });

  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const handleCheckbox = (e) => {
    setTypeSelected({...typeSelected, [e.target.name]: e.target.checked });

    if (e.target.checked) {
      const filteredResults = allPokemos.filter((pokemon) =>
        pokemon.types.map(type => type.type.name).includes(e.target.name)
      );
      setFilteredPokemons([...FiftyPokémons, ...filteredResults])
    }
    else{
      const filteredResults = filteredPokemons.filter((pokemon) =>
        !pokemon.types.map(type => type.type.name).includes(e.target.name)
      );
      setFilteredPokemons([...filteredResults])
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        FiftyPokémons,
        allPokemos,
        getPokemonByID,
        onClickLoadMore,
        //Loader
        loading,
        setLoading,
        //Filter
        active,
        setActive,
        //Filter container
        handleCheckbox,
        filteredPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
