import PokeFightHpBar from "./PokeFightHpBar";

function RandomPokemon({ pokemon, enemyFightHp }) {
  return (
    <div className="pokefight_random_pokemon">
      <img
        className="pokefight_random_pokemon_img"
        src={pokemon && pokemon.data.sprites.front_default}
      />
      <PokeFightHpBar fight={enemyFightHp} />
    </div>
  );
}
export default RandomPokemon;
