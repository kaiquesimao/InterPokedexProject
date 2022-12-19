const pokemonList = document.getElementById("pokemonList");
const loadMorePokeButton = document.getElementById("loadMorePokemons");
let offset = 0;
const limit = 10;

loadPokemons(offset, limit);

function loadPokemons (offset, limit){  
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => `
      <li class="pokemon ${pokemon.type}">
      
        <span class="numeroPokemon">#${pokemon.number}</span>
        <span class="nome">${pokemon.name}</span>
        
        <div class="detalhes">
          <ol class="tipos">
            ${pokemon.types
              .map((type) => `<li class="tipo ${type}">${type}</li>`)
              .join("")}
          </ol>
            <img alt="${pokemon.name}" src="${pokemon.photo}">
        </div>
      </li>`).join("");
    pokemonList.innerHTML += newHtml; 
  });
}

loadMorePokeButton.addEventListener("click", () => {
  offset += limit
  loadPokemons(offset, limit)});
