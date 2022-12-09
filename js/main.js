let pokemonList = document.getElementById("pokemonList");
pokeApi
  .getPokemons()
  .then(
    (pokemons = []) =>
      (pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join(""))
  );

function convertPokemonToHtml(pokemon) {
  return `<li class="pokemon">
    <span class="numeroPokemon">#${pokemon.order}</span>
        <span class="nome">${pokemon.name}</span>
            <div class="detalhes">
                <ol class="tipos">
                    ${convertPokemonTypesToLi(pokemon.types).join("")}
                </ol>
                <img alt="${pokemon.name}"
                    src="${pokemon.sprites.other.dream_world.front_default}">
            </div>
        </li>`;
}

function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map(
    (typeSlot) => `<li class="tipo">${typeSlot.type.name}</li>`
  );
}
