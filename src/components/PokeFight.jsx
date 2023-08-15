import "./styles/pokeFight.css";
import PokemonDropdown from "./DropdownPokemon";
import RandomPokemon from "./RandomPokemon";
import { useState } from "react";

const PokeFight = ({ pokemons }) => {
  const [enemyFightHp, setEnemyFightHp] = useState({ stateEnemyHp: 100 });
  const [userFightHp, setUserFightHp] = useState({ stateUserHp: 100 });
  const [userSelect, setUserSelect] = useState(null);
  const [selectPokemonMessage, setSelectPokemonMessage] = useState(false);
  const [randomPokemon, setRandomPokemon] = useState();
  const [activePlayer, setActivePlayer] = useState(true);

  console.log("enemy: ", enemyFightHp.stateEnemyHp);
  console.log("user: ", userFightHp.stateUserHp);

  const onChangeHandler = (selectedOption) => {
    setUserSelect(selectedOption.value);
    setSelectPokemonMessage(false);
    randomPokemonHandler();
    randomActivePlayerHandler();
  };

  function randomPokemonHandler() {
    if (pokemons) {
      let randomIndex = Math.floor(Math.random() * 151);
      setRandomPokemon(pokemons[randomIndex]);
    }
  }

  function randomActivePlayerHandler() {
    let randomActivPlayerIndex = Math.floor(Math.random() * 2);
    if (randomActivPlayerIndex === 0) {
      setActivePlayer(true);
    } else if (randomActivPlayerIndex === 1) {
      setActivePlayer(false);
    }
  }

  const userHp = userSelect && userSelect.stats[0].base_stat;
  const userAttack = userSelect && userSelect.stats[1].base_stat;
  const userDefense = userSelect && userSelect.stats[2].base_stat;

  const enemyHp = randomPokemon && randomPokemon.data.stats[0].base_stat;
  const enemyAttack = randomPokemon && randomPokemon.data.stats[1].base_stat;
  const enemyDefense = randomPokemon && randomPokemon.data.stats[2].base_stat;

  function userFight() {
    if (!userSelect) {
      setSelectPokemonMessage(true);
      console.log("userFightMEssage");
    } else {
      setEnemyFightHp((prevEnemyFightHp) => {
        return {
          ...prevEnemyFightHp,
          stateEnemyHp:
            prevEnemyFightHp.stateEnemyHp -
            enemyHp +
            enemyDefense / 2 -
            userAttack / 2,
        };
      });
      setActivePlayer(!false);
      console.log("userFight");
    }
  }

  function computerFight() {
    if (!userSelect) {
      setSelectPokemonMessage(true);
      console.log("computerFightMessage");
    } else {
      setUserFightHp((prevUserFightHp) => {
        return {
          ...prevUserFightHp,
          stateUserHp:
            prevUserFightHp.stateUserHp -
            userHp +
            userDefense / 2 -
            enemyAttack / 2,
        };
      });
      setActivePlayer(!true);
      console.log("computerFight");
    }
  }

  function newGame() {
    setUserSelect(null);
    setEnemyFightHp({ stateEnemyHp: 100 });
    setUserFightHp({ stateUserHp: 100 });
  }

  // function computerFightAuto() {
  //   setTimeout(computerFight, 3000);
  // }

  return (
    <>
      <div className="pokefight_container">
        {selectPokemonMessage && (
          <p className="select-pokemon-message">
            You need to select a Pokemon!
          </p>
        )}
        {enemyFightHp.stateEnemyHp <= 0 && <p>You Won!</p>}
        {userFightHp.stateUserHp <= 0 && <p>You Lose!</p>}
        {!activePlayer
          ? userSelect && <p>Your turn!</p>
          : userSelect && <p>Computers Turn</p>}
        {userSelect && (
          <div className="pokefight_random_pokemon">
            <RandomPokemon
              pokemon={randomPokemon}
              enemyFightHp={enemyFightHp.stateEnemyHp}
            />
          </div>
        )}
        <div className="pokefight_user_pokemon">
          <PokemonDropdown
            pokemons={pokemons}
            userSelect={userSelect}
            onChangeHandler={onChangeHandler}
            randomPokemon={randomPokemon}
            userFightHp={userFightHp.stateUserHp}
          />
        </div>

        <div className="pokefight_button">
          <button
            onClick={!activePlayer ? userFight : computerFight}
            disabled={
              userFightHp.stateUserHp <= 0 || enemyFightHp.stateEnemyHp <= 0
              // || activePlayer
            }
            className="pokefight_fightbtn"
          >
            Attack!
          </button>
          {userFightHp.stateUserHp <= 0 && (
            <button className="pokefight_fightbtn " onClick={newGame}>
              New Game
            </button>
          )}
          {enemyFightHp.stateEnemyHp <= 0 && (
            <button className="pokefight_fightbtn " onClick={newGame}>
              New Game
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PokeFight;
