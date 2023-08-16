import "./styles/dropdown.css";
import Select from "react-select";
import PokeFightHpBar from "./PokeFightHpBar";

const PokemonDropdown = ({
  pokemons,
  userSelect,
  onChangeHandler,
  userFightHp,
  userMaxHp,
}) => {
  return (
    <>
      {!userSelect && (
        <div className="dropdown_select">
          {pokemons && (
            <Select
              onChange={onChangeHandler}
              options={pokemons.map((pokemon) => {
                return {
                  value: pokemon.data,
                  label:
                    pokemon.data.name.charAt(0).toUpperCase() +
                    pokemon.data.name.slice(1),
                };
              })}
            />
          )}
        </div>
      )}
      {userSelect && (
        <>
          <PokeFightHpBar fight={userFightHp} maxHp={userMaxHp} />
          <img
            className="user_pokemon_image"
            src={userSelect && userSelect.sprites.back_default}
          />
        </>
      )}
    </>
  );
};

export default PokemonDropdown;
