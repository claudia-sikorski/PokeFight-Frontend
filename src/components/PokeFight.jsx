import "./styles/pokeFight.css";
import PokemonDropdown from "./DropdownPokemon";
import RandomPokemon from "./RandomPokemon";
import PokeFightHpBar from "./PokeFightHpBar";
import { useState } from "react";

const PokeFight = ({ pokemons }) => {
  const [hp, setHp] = useState(100);
  const [userSelect, setUserSelect] = useState(null);

  const onChangeHandler = (selectedOption) => {
    setUserSelect(selectedOption.value);
  };

  console.log(userSelect);

  if (!pokemons) return <></>;
  let allPokemons = pokemons.map((poke) => poke.data);
  let randomIndex = Math.floor(Math.random() * allPokemons.length);
  let pokemon = allPokemons[randomIndex];

  function fight(userAttack, enemyHp) {
    setHp(100 - 80);
  }
  return (
    <>
      <div className="pokefight_container">
        <div className="test"></div>

        <div className="pokefight_user_pokemon">
          <PokemonDropdown
            pokemons={pokemons}
            hp={hp}
            userSelect={userSelect}
            onChangeHandler={onChangeHandler}
          />
        </div>
        <div className="pokefight_random_pokemon">
          <RandomPokemon pokemon={pokemon} />
          <PokeFightHpBar fight={hp} />
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
