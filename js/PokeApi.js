const pokeApi = {};

pokeApi.getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json());
};

pokeApi.getPokemons = (offset = 0, limit = 9) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
      .then((response) => response.json())
      .then((JsonBody) => JsonBody.results)
      .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
      .then((detailRequests) => Promise.all(detailRequests))
      .then((pokemonDetails) => pokemonDetails)
      .catch((error) => console.log(error));
};
