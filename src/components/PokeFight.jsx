import "./styles/pokeFight.css";

const PokeFight = () => {
  return (
    <>
      <div className="pokefight_container">
        <div className="pokefight_user_pokemon">
          <button className="pokefight_selectpokemon_btn">Select your Pokemon!</button>
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
