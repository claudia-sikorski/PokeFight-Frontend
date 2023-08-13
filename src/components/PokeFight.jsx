import "./styles/pokeFight.css";
import PokemonDropdown from "./DropdownPokemon";
import RandomPokemon from "./RandomPokemon";
import PokeFightHpBar from "./PokeFightHpBar";
import { useState } from "react";

const PokeFight = ({ pokemons }) => {
  const [enemyFightHp, setEnemyFightHp] = useState(100);
  const [userFightHp, setUserFightHp] = useState(100);
  const [fightHp, setFightHp] = useState(100);
  const [userSelect, setUserSelect] = useState(null);
  const [selectPokemonMessage, setSelectPokemonMessage] = useState(false);
  const [randomPokemon, setRandomPokemon] = useState();

  const onChangeHandler = (selectedOption) => {
    setUserSelect(selectedOption.value);
    setSelectPokemonMessage(false);
    randomPokemonHandler();
  };

  function randomPokemonHandler() {
    if (pokemons) {
      let randomIndex = Math.floor(Math.random() * 151);
      setRandomPokemon(pokemons[randomIndex]);
    }
  }

  const userAttack = userSelect && userSelect.stats[1].base_stat;
  const userHp = userSelect && userSelect.stats[0].base_stat;

  const enemyHp = randomPokemon && randomPokemon.data.stats[0].base_stat;
  const enemyAttack = randomPokemon && randomPokemon.data.stats[1].base_stat;

  function userFight() {
    if (!userSelect) {
      setSelectPokemonMessage(true);
    } else {
      setEnemyFightHp(enemyHp - userAttack / 3);
    }
  }

  function computerFight() {
    if (!userSelect) {
      setSelectPokemonMessage(true);
    } else {
      setUserFightHp(userHp - enemyAttack / 3);
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
            userFightHp={userFightHp}
          />
        </div>

        <div className="pokefight_button">
          <button onClick={userFight} className="pokefight_fightbtn">
            Attack!
          </button>
          <button onClick={computerFight} className="pokefight_fightbtn">
            ComputerAttack test!
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
