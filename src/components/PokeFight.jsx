import "./styles/pokeFight.css";
import PokemonDropdown from "./DropdownPokemon";
import RandomPokemon from "./RandomPokemon";
import PokeFightHpBar from "./PokeFightHpBar";
import { useState } from "react";

const PokeFight = ({ pokemons }) => {
  const [enemyFightHp, setEnemyFightHp] = useState(100);
  const [fightHp, setFightHp] = useState(100);
  const [userSelect, setUserSelect] = useState(null);

  const onChangeHandler = (selectedOption) => {
    setUserSelect(selectedOption.value);
  };

  let randomIndex = Math.floor(Math.random() * 151);
  let randomPokemon = pokemons && pokemons[randomIndex];

  const userAttack = userSelect && userSelect.stats[1].base_stat;
  const enemyHp = randomPokemon && randomPokemon.data.stats[0].base_stat;

  function fight() {
    setEnemyFightHp(enemyHp - userAttack / 3);
  }

  function newGame() {
    setUserSelect(null);
    setEnemyFightHp(100);
  }

  return (
    <>
      <div className="pokefight_container">
        <div className="test"></div>

        <div className="pokefight_user_pokemon">
          <PokemonDropdown
            pokemons={pokemons}
            userSelect={userSelect}
            onChangeHandler={onChangeHandler}
            fight={fightHp}
          />
        </div>
        <div className="pokefight_random_pokemon">
          <RandomPokemon pokemon={randomPokemon} />
          <PokeFightHpBar fight={enemyFightHp} />
        </div>
        <div className="pokefight_button">
          <button onClick={fight} className="pokefight_fightbtn">
            Fight
          </button>
          <button className="pokefight_fightbtn " onClick={newGame}>
            New Game
          </button>
        </div>
      </div>
    </>
  );
};

export default PokeFight;
