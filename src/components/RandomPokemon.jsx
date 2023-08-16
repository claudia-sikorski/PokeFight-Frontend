function RandomPokemon({ pokemon }) {
  return (
    <div className="pokefight_random_pokemon">
      
      <img
        className="pokefight_random_pokemon_img"
        src={pokemon && pokemon.data.sprites.front_default}
      />
    </div>
  );
}
export default RandomPokemon;
