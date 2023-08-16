import "./styles/pokeFight.css";
import PokemonDropdown from "./DropdownPokemon";
import RandomPokemon from "./RandomPokemon";
import { useState } from "react";

const PokeFight = ({ pokemons }) => {
  const [userFightHp, setUserFightHp] = useState(1);
  const [enemyFightHp, setEnemyFightHp] = useState(1);
  const [userMaxHp, setUserMaxtHp] = useState(1);
  const [enemyMaxHp, setEnemyMaxHp] = useState(1);
  const [userSelect, setUserSelect] = useState(null);
  const [selectPokemonMessage, setSelectPokemonMessage] = useState(false);
  const [randomPokemon, setRandomPokemon] = useState();
  const [activePlayer, setActivePlayer] = useState(true);

  const onChangeHandler = (selectedOption) => {
    setUserSelect(selectedOption.value);
    setSelectPokemonMessage(false);
    randomPokemonHandler();
    randomActivePlayerHandler();
    setUserFightHp(
      selectedOption.value.stats[0].base_stat +
        selectedOption.value.stats[1].base_stat +
        selectedOption.value.stats[5].base_stat
    );
    setUserMaxtHp(
      selectedOption.value.stats[0].base_stat +
        selectedOption.value.stats[1].base_stat +
        selectedOption.value.stats[5].base_stat
    );
  };

  function randomPokemonHandler() {
    if (pokemons) {
      let randomIndex = Math.floor(Math.random() * 152);
      setRandomPokemon(pokemons[randomIndex]);
      setEnemyFightHp(
        pokemons[randomIndex].data.stats[0].base_stat +
          pokemons[randomIndex].data.stats[1].base_stat +
          pokemons[randomIndex].data.stats[5].base_stat
      );
      setEnemyMaxHp(
        pokemons[randomIndex].data.stats[0].base_stat +
          pokemons[randomIndex].data.stats[1].base_stat +
          pokemons[randomIndex].data.stats[5].base_stat
      );
    }
  }

  function randomActivePlayerHandler() {
    let randomActivPlayerIndex = Math.floor(Math.random() * 2);
    console.log("randomPokemonIndex", randomActivPlayerIndex);
    if (randomActivPlayerIndex === 0) {
      setActivePlayer(true);
    } else if (randomActivPlayerIndex === 1) {
      setActivePlayer(false);
    }
  }

  console.log(userSelect);

  const userAttack = userSelect && userSelect.stats[1].base_stat;

  const enemyAttack = randomPokemon && randomPokemon.data.stats[1].base_stat;

  function userFight() {
    if (!userSelect) {
      setSelectPokemonMessage(true);
      console.log("userFightMEssage");
    } else {
      setEnemyFightHp((prevEnemyFightHp) => {
        console.log("prevEnemyFightHp", prevEnemyFightHp);
        return prevEnemyFightHp - userAttack;
      });
      setActivePlayer(!activePlayer);
      console.log("userFight");
    }
  }

  function computerFight() {
    if (!userSelect) {
      setSelectPokemonMessage(true);
      console.log("computerFightMessage");
    } else {
      setUserFightHp((prevUserFightHp) => {
        return prevUserFightHp - enemyAttack / 2;
      });
      setActivePlayer(!activePlayer);
      console.log("computerFight");
    }
  }

  function newGame() {
    setUserSelect(null);
    setEnemyFightHp(1);
    setUserFightHp(1);
  }

  function computerFightAuto() {
    if (userSelect && userFightHp > 0 && enemyFightHp > 0) {
      setTimeout(computerFight, 3000);
    }
  }

  return (
    <>
      <div className="pokefight_container">
        <div className="pokefight_result">
          {enemyFightHp <= 0 && <p>You Won!</p>}
          {userFightHp <= 0 && <p>You Lose!</p>}
        </div>

        {userSelect && (
          <div className="pokefight_random_pokemon">
            <RandomPokemon
              pokemon={randomPokemon}
              enemyFightHp={enemyFightHp}
              enemyMaxHp={enemyMaxHp}
            />
          </div>
        )}
        <div className="pokefight_user_pokemon">
          <PokemonDropdown
            pokemons={pokemons}
            userSelect={userSelect}
            onChangeHandler={onChangeHandler}
            randomPokemon={randomPokemon}
            userFightHp={userFightHp}
            userMaxHp={userMaxHp}
          />
        </div>

        <div className="pokefight_button">
          <div className="turn_alert">
            {!activePlayer
              ? userSelect &&
                userFightHp > 0 &&
                enemyFightHp > 0 && (
                  <p className="poke-fight-active-player">Your turn!</p>
                )
              : userSelect &&
                userFightHp > 0 &&
                enemyFightHp > 0 && (
                  <p className="poke-fight-active-player">Computers turn!</p>
                )}
          </div>
          <button
            onClick={!activePlayer ? userFight : computerFightAuto()}
            disabled={userFightHp <= 0 || enemyFightHp <= 0 || activePlayer}
            className="pokefight_fightbtn"
          >
            Attack!
          </button>
          {selectPokemonMessage && (
            <p className="select-pokemon-message">
              You need to select a Pokemon!
            </p>
          )}
          {userFightHp <= 0 && (
            <button className="pokefight_fightbtn " onClick={newGame}>
              New Game
            </button>
          )}
          {enemyFightHp <= 0 && (
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
