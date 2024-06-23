export const getAllPokemons = async () => {
   const baseURL = "https://pokeapi.co/api/v2/";

   const res = await fetch(`${baseURL}pokemon?offset=0&limit=100000`);
   const data = await res.json();
   //console.log(data);

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