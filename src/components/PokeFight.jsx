import "./styles/pokeFight.css";
import PokemonDropdown from "./DropdownPokemon";

const PokeFight = ({ pokemons }) => {
  return (
    <>
      <div className="pokefight_container">
        <div className="pokefight_user_pokemon">
          <PokemonDropdown pokemons={pokemons} />
        </div>
        <div className="pokefight_random_pokemon"></div>
        <div className="pokefight_button">
          <button className="pokefight_fightbtn">Fight</button>
        </div>
      </div>
    </>
  );
};

export default PokeFight;
