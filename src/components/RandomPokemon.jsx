import PokeFightHpBar from "./PokeFightHpBar";

function RandomPokemon({ pokemon, enemyFightHp, enemyMaxHp }) {
  return (
    <div className="pokefight_random_pokemon">
      <PokeFightHpBar fight={enemyFightHp} maxHp={enemyMaxHp} />
      <img
        className="pokefight_random_pokemon_img"
        src={pokemon && pokemon.data.sprites.front_default}
      />
    </div>
  );
}
export default RandomPokemon;
