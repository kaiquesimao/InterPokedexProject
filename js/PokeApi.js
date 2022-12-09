const pokeApi = {};

pokeApi.getPokemons = (offset = 0, limit = 9) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
      .then((response) => response.json())
      .then((JsonBody) => JsonBody.results)
      .catch((error) => console.log(error));
};