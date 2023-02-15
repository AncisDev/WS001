const POKEAPI_URL = "https://pokeapi.co/api/v2";

export async function getPokemons() {
  const response = await fetch(`${POKEAPI_URL}/pokemon?limit=151`);
  const data = await response.json();
  return data;
}

export async function getPokemon(pokemonName) {
  const response = await fetch(`${POKEAPI_URL}/pokemon/${pokemonName}`);
  const data = await response.json();
  return data;
}