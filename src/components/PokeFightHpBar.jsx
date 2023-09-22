import "./styles/pokeFightHpBar.css";

const PokeFightHpBar = ({ fight, maxHp }) => {
  return (
    <div className="poke-fight-hp-bar">
      <label htmlFor="hp">HP:</label>
      <meter
        id="fuel"
        min="0"
        max={maxHp}
        low={(maxHp / 100) * 33}
        high={(maxHp / 100) * 66}
        optimum={(maxHp / 100) * 80}
        value={fight}
      ></meter>
    </div>
  );
};

export default PokeFightHpBar;
