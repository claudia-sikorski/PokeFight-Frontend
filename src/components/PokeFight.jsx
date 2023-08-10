import "./styles/pokeFight.css";
import PokemonDropdown from "./DropdownPokemon";
import RandomPokemon from "./RandomPokemon";

const PokeFight = ({ pokemons }) => {
  return (
    <>
      <div className="pokefight_container">
        <div className="pokefight_user_pokemon">
          <PokemonDropdown pokemons={pokemons} />
        </div>
        <div className="pokefight_random_pokemon">
          <RandomPokemon pokemons={pokemons} />
        </div>
        <div className="pokefight_button">
          <button className="pokefight_fightbtn">Fight</button>
        </div>
      </div>
    </>
  );
};

export default PokeFight;
