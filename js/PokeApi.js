const pokeApi = {};

pokeApi.getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url)
      .then((response) => response.json())
      .then(convertPokeApiDetailToPokemon);
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

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();

  pokemon.name = pokeDetail.name;
  pokemon.number = pokeDetail.order;
  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
  pokemon.types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  pokemon.type = pokemon.types[0];

  return pokemon;
}
