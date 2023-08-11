import React from "react";

function RandomPokemon({ pokemons }) {
  if (!pokemons) return <></>;
  let allPokemons = pokemons.map((poke) => poke.data);
  let randomIndex = Math.floor(Math.random() * allPokemons.length);
  let pokemon = allPokemons[randomIndex];
  console.log("Random pokemons", pokemon);
  return (
    <div className="pokefight_random_pokemon">
      <img
        className="pokefight_random_pokemon_img"
        src={pokemon.sprites.front_default}
      />
      <div className="pokefight_random_pokemon_bar"></div>
    </div>
  );
}
export default RandomPokemon;
