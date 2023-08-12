import React from "react";

function RandomPokemon({ pokemon }) {
  // console.log("Random pokemons", pokemon);
  return (
    <div className="pokefight_random_pokemon">
      <img
        className="pokefight_random_pokemon_img"
        src={pokemon.sprites.front_default}
      />
    </div>
  );
}
export default RandomPokemon;
