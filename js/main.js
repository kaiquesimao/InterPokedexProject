buscarPokemons();

function buscarPokemons() {
  const offset = 0;
  const limit = 9;
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  fetch(url)
    .then((response) => response.json())
    .then((JsonBody) => JsonBody.results)
    .then((pokemons) => {
      for (let i = 0; i < pokemons.length; i++) {
        let pokemon = pokemons[i];
        convertPokemonToHtml(pokemon);
      }
    })
    .catch((error) => console.log(error));
}

function convertPokemonToHtml(pokemon) {
  let pokemonList = document.getElementById("pokemonList");
  pokemonList.innerHTML += `<li class="pokemon">
            <span class="numeroPokemon">#001</span>
            <span class="nome">${pokemon.name}</span>
            <div class="detalhes">
                <ol class="tipos">
                    <li class="tipo">Grass</li>
                    <li class="tipo">Poison</li>
                </ol>
                <img alt="${pokemon.name}"
                     src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg">
            </div>
        </li>`;
}
