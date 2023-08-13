import "./styles/pokeFight.css";
import PokemonDropdown from "./DropdownPokemon";
import RandomPokemon from "./RandomPokemon";
import PokeFightHpBar from "./PokeFightHpBar";
import { useState } from "react";

const PokeFight = ({ pokemons }) => {
  const [enemyFightHp, setEnemyFightHp] = useState(100);
  const [fightHp, setFightHp] = useState(100);
  const [userSelect, setUserSelect] = useState(null);
  const [selectPokemonMessage, setSelectPokemonMessage] = useState(false);

  const onChangeHandler = (selectedOption) => {
    setUserSelect(selectedOption.value);
  };

  let randomIndex = Math.floor(Math.random() * 151);
  let randomPokemon = pokemons && pokemons[randomIndex];

  const userAttack = userSelect && userSelect.stats[1].base_stat;
  const enemyHp = randomPokemon && randomPokemon.data.stats[0].base_stat;

  function fight() {
    if (userSelect === null) {
      setSelectPokemonMessage(true);
    } else {
      setEnemyFightHp(enemyHp - userAttack / 3);
    }
  }

  function newGame() {
    setUserSelect(null);
    setEnemyFightHp(100);
  }

  return (
    <>
      <div className="pokefight_container">
        {selectPokemonMessage && (
          <p className="select-pokemon-message">
            You need to select a Pokemon!
          </p>
        )}
        <div className="pokefight_user_pokemon">
          <PokemonDropdown
            pokemons={pokemons}
            userSelect={userSelect}
            onChangeHandler={onChangeHandler}
            fight={fightHp}
            randomPokemon={randomPokemon}
            enemyFightHp={enemyFightHp}
          />
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
