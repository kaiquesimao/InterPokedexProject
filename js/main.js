let pokemonList = document.getElementById("pokemonList");
pokeApi
    .getPokemons()
    .then(
        (pokemons = []) =>
            (pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join(""))
    );

function convertPokemonToHtml(pokemon) {
  return `<li class="pokemon">
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
