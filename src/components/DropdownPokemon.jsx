import "./styles/dropdown.css";
import Select from "react-select";

const PokemonDropdown = ({
  pokemons,
  userSelect,
  onChangeHandler,
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
          <div className="pokefight_image_center">
          <img
            className="user_pokemon_image"
            src={userSelect && userSelect.sprites.back_default}
          />
          </div>
        </>
      )}
    </>
  );
};

export default PokemonDropdown;
