import "./styles/pokeFightHpBar.css";

const PokeFightHpBar = ({ fight }) => {
  return (
    <div className="poke-fight-hp-bar">
      <label htmlFor="hp">HP:</label>
      <meter
        id="fuel"
        min="0"
        max="100"
        low="33"
        high="66"
        optimum="80"
        value={fight}
      ></meter>
    </div>
  );
};

export default PokeFightHpBar;
