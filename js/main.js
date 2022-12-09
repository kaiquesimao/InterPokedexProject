let pokemonList = document.getElementById("pokemonList");
pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML = pokemons.map(convertPokemonToHtml).join("");
});

function convertPokemonToHtml(pokemon) {
  return `<li class="pokemon">
    <span class="numeroPokemon">#${pokemon.number}</span>
        <span class="nome">${pokemon.name}</span>
            <div class="detalhes">
                <ol class="tipos">
                    ${pokemon.types.map((type) => `<li>${type}</li>`).join("")}
                </ol>
                <img alt="${pokemon.name}"
                    src="${pokemon.photo}">
            </div>
        </li>`;
}
