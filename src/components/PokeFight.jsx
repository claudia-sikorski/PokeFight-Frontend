import "./styles/pokeFight.css";
import PokemonDropdown from "./DropdownPokemon";
import RandomPokemon from "./RandomPokemon";
import PokeFightHpBar from "./PokeFightHpBar";
import { useState } from "react";

const PokeFight = ({ pokemons }) => {
  const [hp, setHp] = useState(100);

  function fight() {
    setHp(100 - 80);
  }
  return (
    <>
      <div className="pokefight_container">
        <PokeFightHpBar fight={hp} />
        <div className="pokefight_user_pokemon">
          <PokemonDropdown pokemons={pokemons} />
        </div>
        <div className="pokefight_random_pokemon">
          <RandomPokemon pokemons={pokemons} />
        </div>
        <div className="pokefight_button">
          <button onClick={fight} className="pokefight_fightbtn">
            Fight
          </button>
        </div>
      </div>
    </>
  );
};

export default PokeFight;
